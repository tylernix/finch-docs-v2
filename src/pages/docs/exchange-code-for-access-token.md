---
title: Exchange Code For Access Token
description: To interact with the Finch API, you will need to exchange the short-lived authorization code for a long-lived `access_token` before it expires.
---

To interact with the Finch API, you will need to exchange the short-lived authorization code for a long-lived `access_token` before it expires. A Finch access token is a long-living, infinite token, i.e. it does not expire unless explicitly [disconnected](https://developer.tryfinch.com/docs/reference/c65ecbd512332-disconnect). This exchange should always take place in your back-end to ensure your `client_secret` and `access_token` are never publicly exposed.

## Making API Requests

An easy way to exchange an authorization code for an access token is to create a /callback API endpoint. The examples provided uses Express.js server. To install Express.js on your own machine, you can follow the [Express.js installation steps](https://expressjs.com/en/starter/installing.html).

```js
import axios from 'axios'
const express = require('express')
const app = express()
const port = 3000

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  const authRes = await fetch('https://api.tryfinch.com/auth/token', {
    method: "POST",
    body: {
      client_id: '<your-client-id>,
      client_secret: '<your-client-secret>,
      code, 
      //redirect_uri: 'https://tryfinch.com' }, // The redirect_uri is not necessary if you are using Embed Finch Connect Flow
    }
  });

  // Store the newly setup connection's access_token in your database to use for subsequent calls to Finch's APIs.
  await redis.set('current_connection', authRes.data.access_token)

  // Once the token is recived, redirect to another location in your application to display the data
  return res.redirect("/company")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

{% callout type="warning" title="Note" %}
  Storing access tokens can be complicated. Refer to our [Storing Access Tokens](/docs/storing-access-tokens) guide for help.
{% /callout %}

### Request

{% tabs %}

{% tab label="Headers" %}

Header | Description
-------|--------------
`Content-Type` | Must be set to `application/json`, matching the format of the request body.

{% /tab %}

{% tab label="Body" %}

Parameter | Required | Description
----------|----------|-------------
`client_id` | true | Your `client_id`, a public unique identifier for your application.
`client_secret` | true | Your `client_secret`, a secret value which authorizes your application with Finch. Please ensure you protect your `client_secret`.
`code` | true | The authorization code received by the `onSuccess` handler.

{% /tab %}

{% tab label="Example" %}

```shell
curl https://api.tryfinch.com/auth/token \
  -X POST \
  -H "Content-Type: application/json" \
  --data-raw '{
    "client_id": "<your_client_id>",
    "client_secret": "<your_client_secret>",
    "code": "<your_authorization_code>"
}'
```

{% /tab %}

{% /tabs %}

### Response

{% tabs %}

{% tab label="Schema" %}

Parameter | Description
----------|-------------
`access_token` | The `access_token` used to make requests to the Finch API. It has does not expire and should be stored securely in your database.

{% /tab %}

{% tab label="Example" %}

```json
{
  "access_token": "<your_access_token>",
}
```

{% /tab %}

{% /tabs %}
