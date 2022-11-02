---
title: Successful Integration Checklist
description: These recommendations will ensure a seamless experience for your customers and make your integration more robust and secure going into production.
---

We recommend the following steps while planning and developing your Finch integration, from both a product and engineering perspective. The recommendations outlined below will ensure a seamless experience for your customers, make your integration more robust and secure, and set you up for success when you launch into production.

## Integrating Finch Connect

Finch Connect is the frontend User Interface that allows your customers to safely and securely grant your application access to their employment systems. Following these steps will optimize your Finch Connect integration to increase conversion, improve your customers' experiences, and avoid common configuration errors.

- [ ]  Integrate Finch Connect into your application's frontend by using either the [embedded flow](/docs/embed-finch-connect) or [redirect flow](/docs/redirect-finch-connect).

### Designing a seamless onboarding experience

- [ ]  A well-designed customer flow will carefully consider when and how to present Finch Connect to your customers. We recommend you read the [Integrating Finch Connect into your product](/docs/automated-flow#integrating-finch-connect-into-your-product) guide for more tips.
- [ ]  Set expectations and increase conversion rate by displaying messaging to your customers prior to initiating Finch Connect. You can read the [How to incentivize your customer to connect their provider](/docs/automated-flow#how-do-i-incentivize-my-user-to-connect-their-system) guide for more information.
- [ ]  If you add Finch Connect to your customer's onboarding flow, read our [Onboarding Experience](/docs/automated-flow#finch-connect-in-your-user-s-onboarding) guide for recommendations on a UI flow to work around the request latencies of some providers.

### Supporting customers with custom setups

- [ ]  Make sure your application is able handle a customer with [multiple provider accounts](/docs/managing-multiple-connections#presenting-finch-connect).

## Integrating Finch API

Given the nature of the underlying systems Finch's API is built on top of, the following steps are recommended to build a resilient integration.

- [ ]  [Integrate Finch's API into your application's backend](/docs/exchange-code-for-access-token)

### Sending API requests

- [ ]  Integrate an external rate limiter into your application that respects [Finch APIs rate limits](/docs/rate-limits).

### Handling API responses

- [ ]  Most data points returned by the API are `null`able. Ensure your integration is resilient to type of data by [handling API responses](/docs/handle-api-responses) properly.

### Handling error responses

Your application should expect and handle different [error types](/docs/error-types) from Finch APIs.

There are three important errors your application should be aware of:

- [ ]  Ensure there are user flows built to support `reauthentication_error`s, i.e. when your customer needs to go through Finch Connect again to [reconnect their provider](/docs/re-authentication-flow) if their initial connection has gone stale.
- [ ]  Implement the troubleshooting tips to gracefully handle [internal server errors](/docs/error-handling).
- [ ]  If you use our batch endpoints, ensure your application handles [errors returned in the batch format](/docs/error-handling#batch-requests).

### Supporting users with custom setups

- [ ]  Some of your customers may use multiple employment systems. This will involve [application logic](/docs/managing-multiple-connections#application-logic) and [database schema](/docs/managing-multiple-connections#flexible-database-schema) considerations on your end.

## Security

The data stored within your customers' systems are sensitive and should be handled using best security practices.

- [ ]  Store your `client_secret` in a back-end data store. It should never be exposed client-side. It is recommended to store it encrypted.
- [ ]  Since your `client_secret` should remain on the back-end, you should always perform an authorization `code` for an `access_token` exchange only on your back-end server and never on the client-side.
- [ ]  Save `access_token`s in a back-end data store against the users of your application. It should never be exposed client-side. It is recommended to store them encrypted.

## Storage and Logging

Storing and logging key identifiers will ensure a faster turnaround time when contacting Support about issues.

- [ ]  Each Finch `access_token` is associated with a static Finch `company_id`. You can find the id using the `/introspect` endpoint. Save this in your data store alongside the token and use it when contacting Support about an issue or while reconciling billing statements from Finch.
- [ ]  Each Finch API response returns a `Finch-Request-ID` in the headers. Use this when contacting Support about an issue.

## Production Setup

The following steps will help create a white-labeled experience for your users.

- [ ]  Email forwarding to Finch is an enterprise-level feature that allows you to provision a custom email address for some API integrations. Contact our team on Slack or send an email to `developers@tryfinch.com` to get started.

## Testing your Finch integration and going live

Before going live, it is valuable to know the options available for you to test your Finch integration. Below are the suggested steps:

- [ ]  Use the [Finch Sandbox](/docs/test-finch-sandbox) to test your integration against mock data.
- [ ]  Some providers like BambooHR and Zenefits allow you to sign up for free demos. You can use these accounts to [test with real providers](/docs/test-with-real-providers).
- [ ]  If your application requires write operations, contact [developers@tryfinch.com](mailto:developers@tryfinch.com) for more information.

Once you have tested your Finch integration with test accounts, you can go live.

- [ ]  Start small with a few, trusted customers and the most reliable providers.
- [ ]  Once your integration works as expected, launch the integration for all of your customers.

## Support

The following steps will ensure you and your team are successful once your integration with Finch has gone live:

- [ ]  [Submit a support ticket]() if you ever need help
- [ ]  Learn how to use the [Developer Dashboard](https://dashboard.tryfinch.com/) to keep track of your connected customers and the health of each connection.
