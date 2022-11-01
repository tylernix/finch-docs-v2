---
title: Exchange Code For Access Token
description: The Finch flow begins when your user wants to connect their employment or payroll system to your application.
---

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

---
