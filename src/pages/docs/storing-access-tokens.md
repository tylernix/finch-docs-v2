---
title: Storing Access Tokens
description: Storing access tokens by employer connections ensures each token is managed properly and securely.
---

Finch defines a connection as an association between a unique "provider_id" and a unique "company_id". Even though different credentials might be used to login (i.e. different users), as long as the same company is using the same provider to login, it only counts as one connection because the company_id and provider_id are the same. Thus, disconnecting one will disconnect the other.

In order to handle this, you can store access tokens by creating connection "keys" that (at a minimum) combine `provider_id` + `company_id`. In production, you usually combine `current_session.user.org_id` + `provider_id` + `company_id` if you are trying to onboard more than one employer.

## Example

As an example, [Redis Sets](https://redis.io/docs/data-types/sets/) have the desirable property of not allowing repeated members. Adding the same element multiple times will result in a set having a single copy of this element. So while the connection key will not be repeated, multiple access_tokens can be added to the key via a new Redis List.

But to make it simple, you can only store the employer's most recent access token to be used for future requests. Each new access token will overwrite the old access token.

```js
cost token = newly_acquired_access_token

// By calling the /introspect endpoint, you can get details like company_id, payroll_provider_id, etc
const introspectRes = await axios({
    method: 'get',
    url: 'https://api.tryfinch.com/introspect',
    headers: {
        Authorization: `Bearer ${token}`,
        'Finch-API-Version': '2020-09-17'
    },
});

const org_id = current_session.user.org_id
const unique_connection_key = `${current_session.user.org_id}:${introspectRes.data.payroll_provider_id}:${introspectRes.data.company_id}`
await redis.set(unique_connection_key, token)

// After storing the access token, go the the next location of your onboarding flow
return res.redirect('/next-step');

```

Now, every new request can use the unique_connection_id (`current_session.user.org_id`:`payroll_provider_id`:`company_id`) as the Redis key to get the employer's access token.

```js
await redis.get(unique_connection_key)

```

> Do not forget, the `access_token` should never be returned to the frontend application.
