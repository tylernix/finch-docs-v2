---
title: Re-authentication Flow
description: A customer may need to re-authenticate if Finch's connection ever gets disconnected.
---

Finch aims to ensure your application maintains long-lived access to your customers' providers. However, when a customer changes security settings on their account or a provider makes changes to its infrastructure, Finch's connection can get disconnected. This will result in an error with the HTTP status code of `401` and `finch_code` of `reauthenticate_user`. When an access token returns this error, your customer will need to re-authenticate by going through the [Automated Finch Connect Flow](/docs/automated-flow) again.

---

## General re-authentication flow

Finch recommends the following steps to handle re-authentication:

1. Catch `401` HTTP status code errors responses with the `finch_code`=`reauthenticate_user` (see handling [Finch API errors](/docs/error-handling)) in your application.
2. Construct the correct Finch Connect [authorization URL](/docs/how-finch-works) for your customer to re-authenticate. To create a more seamless experience, you can bypass the provider selection page by using the `payroll_provider` parameter. You can find the `payroll_provider` of your customer by calling the `/introspect` endpoint with their `access_token`.
3. Notify your customer their connection has gone stale and they can resolve it by re-connecting their account. To increase conversion, we recommend letting your customer know why re-connecting is beneficial to them and the services that will not work until they reconnect.
4. Once your customer goes through Finch Connect successfully again, an authorization `code` is generated which you will need to exchange for a new `access_token` that you can use to send requests to the Finch API. Make sure to save this new token in your database.

> While you will have a new `access_token` for your customer, everything else will remain the same. All Finch identifiers, like `individual_id` or `benefit_id`, are the same across tokens.

---

## Considerations

### Notifying customers

We recommend either using in-app or email notifications to notify your customer there is an issue with their connection, why reconnecting is beneficial, and the steps they need to follow to reconnect.

### Presenting Finch Connect

Below are a couple of options to present the reconnection flow to your customers:

1. Prompt your customer to log on to their application dashboard where you can present them the website page to launch through Finch Connect again.
2. Send your customer an authorization URL with a `redirect_uri` that [redirects them back to their application dashboard](/docs/redirect-finch-connect) after a successful reconnection.
