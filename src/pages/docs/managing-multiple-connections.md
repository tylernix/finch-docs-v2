---
title: Managing Multiple Connections
description: A company can have multiple accounts in the same provider or across different providers.
---

A company can have multiple accounts in the same provider or across different providers. Here are some scenarios where this can happen:

1. **Pay Groups** — A company has an account per payroll group. Some companies split employees into different payroll groups to pay on different cadences. Some systems require multiple accounts to facilitate this functionality.
2. **Migration** — A company is in the process of migrating systems. Therefore, some data may lie in the old system and some are in the new.
3. **Legal Entities** — A company has separate legal entities usually in the form of divisions (corporations & LLCs), franchises (LLCs), or business units (corporations & LLCs). Each entity can have it's own account.
4. **Foreign workers** — A company has foreign contractors or employees and utilizes a separate payroll or HR system account to manage those individuals.

> Each Finch `access_token` is associated with a single account. To identify the account, you can use the [/introspect](https://developer.tryfinch.com/docs/reference/b3A6MTc3MTk2Njk-introspect) endpoint.

Each Finch `access_token` is associated with a single account on one employment system. Therefore, to support multi-account customers, your application will need to support multiple access tokens per customer. While planning your Finch integration, you will need to consider:

1. How to present Finch Connect to your customer so they connect all of their accounts,
2. Designing a flexible database schema to elegantly support multiple access tokens
3. Adding application-level logic to support sending Finch API requests for multiple access token per customer and reconciling the data accordingly.

The [Storing Access Tokens](/docs/storing-access-tokens) guide gives an example using a Redis database.

## Presenting Finch Connect

To have your customer connect multiple accounts to your application, your onboarding flow must allow them to go through the [Automated Finch Connect Flow](/docs/automated-flow) multiple times in order to create a Finch `access_token` per account. You will have to save all of the tokens associated with the customer in your database.

There are two points in time where you can ask your customer to connect *all* of their accounts — during and after onboarding.

### During onboarding

After your customer has gone through the [Automated Connect Flow](../Product-Guides/Automated-Connect-Flow.md#default-flow) to connect an account, your application can immediately prompt them to connect their other accounts. Below is an example UI. Your application would [launch Finch Connect](../Integrating-with-Finch/Integrate-Finch-Connect/Overview.md) again when your customer clicks on the call-to-action button.

{% figure src="/images/multiple-connections-onboarding.png" alt="user interface of allowing customer to add another connection during onboarding" / %}

### After onboarding

You can present your user with a page showing all of their connections. On this page, you can provide the option to connect other accounts. Your application would [launch Finch Connect](/docs/embed-finch-connect) again when your customer clicks on the "connect" button.

{% figure src="/images/multiple-connections-flow.png" alt="user interface of allowing customer to add another connection after onboarding" / %}

## Flexible database schema

Here is an example database schema for the application **Blue Sparrow 401k Co**.

{% figure src="/images/multiple-connections-db-schema.png" alt="database schema handling multiple connections" / %}

A customer can grant **Blue Sparrow 401k Co** access to multiple accounts. In order to allow for multiple accounts at the database level, we recommend defining a `1:many` relationship from your `customer` to `finch_account` table.

## Application logic

When pulling data for a customer, you will need to take into account the customer can have multiple Finch access tokens. If a user has multiple access tokens, you will have to send multiple requests to the Finch API to collect all the data.

There are two scenarios to consider when thinking about reconciling data between multiple access tokens:

- If there are different employees per `access_token` (for example, if a company uses multiple accounts for multiple payroll groups), you can simply concatenate the responses per access token.
- If there are the intersecting employees per `access_token` (for example, if a company is transitioning payroll systems), you may need to [reconcile the employees](/docs/reconciling-employees) in the responses since Finch will return a different `individual_id` for `John Doe` across the two access tokens as `John Doe` has different ids in the underlying systems.
