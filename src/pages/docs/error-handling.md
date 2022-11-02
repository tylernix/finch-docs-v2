---
title: Error Handling
description: 
---

In case of an error, Finch APIs will respond with an appropriate HTTP status code and error body.

Finch uses HTTP status codes to indicate the success or failure of an API request.

- `2xx`: indicates success
- `4xx`: indicates developer or user-related errors
- `5xx`: indicates Finch-related issues

## Error Schema

Name | Type | Description
-----|------|------------
`code` | `integer` | The HTTP status code of the response.
`name` | `string` | An identifier, safe for programmatic use, describing the broad error category.
`finch_code` | `string` | An optional identifier describing the error in more detail. It is safe for programmatic use.
`message` | `string` | A developer friendly message explaining the error.

## Error Types

Name | Finch Code | Code | Description
-----|------------|------|------------
`invalid_grant_error` | | 400 | The authorization code is invalid.
`invalid_token_error` | | 401 | The `access_token` is incorrect.
`invalid_request_error` | | 401 | The request does not match the docs. Example: the request is missing a query parameter.
`authentication_error` | `reauthenticate_user` | 401 | The user will need to reconnect their employment system. See more here.
`invalid_client_error` | | 401 | The provided application credentials were incorrect. Relevant to the `/auth/token` endpoint.
`unauthorized_request_error` | | 401 | The `access_token` is missing from the header.
`insufficient_scope_error` | | 403 | The application credentials have insufficient permissions to access the requested product.
`not_found_error` |`item_not_found`| 404 | The requested resource does not exist. Relevant to the `/employer/benefits/*` endpoints.
`not_found_error` |`benefit_not_found`| 404 | The requested benefit does not exist. Relevant to the `/employer/benefits/*` endpoints.
`not_found_error` |`individual_not_found`| 404 | The requested individual does not exist. Relevant to the `/employer/benefits/*` endpoints.
`unprocessable_request_error` |`unsupported_parameters`| 422 | Parameters provided are not supported by the provider or benefit. Relevant to the `/employer/benefits/*` endpoints.
`unprocessable_request_error` |`invalid_employee_enrollment`| 422 | The employee is unable to be enrolled in a benefit due specific to constraints on the provider side. Relevant to the `/employer/benefits/*` endpoints.
`server_error` | | 500 | The server experienced an unexpected error.
`not_implemented` | | 501 | Finch does not support this specific endpoint for this specific provider.

### 500 Internal Server Errors

Server errors indicate an error on Finch's side and return an HTTP response with a `500` status code.

#### Common causes

- Finch is experiencing internal system issues. This is rare.
- The underlying employment system is experiencing internal system issues.
- Finch received an unsupported response from the underlying employment system and is unable to process it. These are usually quickly resolved by our support team.
- The end-user has intentionally or unintentionally revoked Finch's access to their system. This is usually returned as a `401 - reauthenticate_user` error but can sometimes be returned as `500 - server_error`.

#### Troubleshooting steps

- Retrying immediately usually will not resolve the issue. We recommend retrying the API request in a few hours.
- If the error persists, submit a support ticket with the `Finch-Request-ID`, which can be found in the headers of the response.

### 401 Re-authentication Errors

Authentication errors indicate an error on the employer's side. See the [re-authentication docs](../Re-authentication.md) for more on common causes and troubleshooting steps.

## Batch errors in responses

A number of Finch endpoints (like `/individual`, `/employment`, and `/pay-statement`) are batch endpoints.

For such endpoints, Finch can return errors in two ways:

1. Return an error per batch request item within the response body. The error will be in the same format described in the [Error Types](/docs/error-handling#error-types) section.
2. Return an error at the HTTP status code level. The error will be in the same format described in the [Error Types](/docs/error-handling#error-types) section.

> Ensure your application can handle both types of errors from a batch API call.

{% tabs %}
{% tab label="Response Level" %}

```jsx
Response HTTP Status Code: 200

Response Body:
{
  "responses": [
    {
      // this id varies by endpoint, could also be payment_id or benefit_id
      "individual_id": "fbeabe51-e6d2-45aa-a460-4c8482528f41",
      // corresponds to the `code` parameter of the error schema in the Error Types guide
      "code": 500,
      "body": {
        // corresponds to the `name` parameter of the error schema in the Error Types guide
        "error_name": "server_error",
        // corresponds to the `message` parameter of the error schema in the Error Types guide
        "error_message": "Internal Server Error"
      }
    }
  ]
}
```

{% /tab %}

{% tab label="Status Code Level" %}

```jsx
Response HTTP Status Code: 500

Error Body:
{
  "code": 500,
  "name": "server_error",
  "message": "Internal server error"
}
```

{% /tab %}

{% /tabs %}

> Refer to the [API reference](/api-reference) to ensure your application handles errors from each batch endpoint correctly as response schemas vary by endpoint.
