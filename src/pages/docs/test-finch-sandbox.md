---
title: Test Finch Sandbox
description:
---

The Finch sandbox is a self-contained testing environment that simulates the live Finch production API. The sandbox provides a shielded space where you can test your API integration with Finch by creating mock payroll and HRIS providers and watching how requests respond.

By using the sandbox provider, you can test and debug your apps without referencing any real employees or live  employers. The sandbox lets you operate your application in a safe environment and provides a way to fine-tune your Finch processes before you move your application into production.

## Supported Features

The Finch sandbox mirrors the features on the Finch production servers. While some Finch features do not apply to the sandbox, such as the data syncing schedule, webhooks, and the Benefits endpoints (in progress), the sandbox has the same Finch API feature set as the live environment. You can test your Finch flow in the sandbox since it will behave the same in the sandbox environment as it does with our production API.

The sandbox currently supports the following endpoints:

Organization:

- [/employer/company](https://developer.tryfinch.com/docs/reference/33162be1eed72-company)
- [/employer/directory](https://developer.tryfinch.com/docs/reference/12419c085fc0e-directory)
- [/employer/individual](https://developer.tryfinch.com/docs/reference/9d6c83b09e205-individual)
- [/employer/employment](https://developer.tryfinch.com/docs/reference/1ba5cdec4c979-employment)

Payroll:

- [/employer/payment](https://developer.tryfinch.com/docs/reference/b811fdc2542ca-payment)
- [/employer/pay-statement](https://developer.tryfinch.com/docs/reference/d5fd02c41e83a-pay-statement)

Management:

- [/providers](https://developer.tryfinch.com/docs/reference/327c384190aeb-providers)
- [/introspect](https://developer.tryfinch.com/docs/reference/eee6e798b0f93-introspect)
- [/disconnect](https://developer.tryfinch.com/docs/reference/c65ecbd512332-disconnect)

## Getting started

The credentials you use while logging in determine the behavior of the API.

### Small Company

Login             | Password
---------------------|-------------
 `smallco`           | `letmein`

The most basic example to develop against is the simple scenario - a company with a single employee.

### Large Company

Login              | Password
----------------------|-------------
 `largeco`            | `letmein`

This scenario provides a much larger dataset to test against. Some attributes of this scenario are -

- a single company with multiple employees,
- employees with managers,
- multiple departments and work locations, and
- payments with various earning types, deductions, and employer contributions.

## Testing Benefits

The sandbox supports read access only for all benefits endpoints. For write endpoints, the sandbox will return a `success` status code, but no information will be updated. This allows you to get a feel for how the API works without modifying any state.

{% tabs %}
{% tab label="Example Request" %}

```bash
curl https://api.tryfinch.com/employer/benefts \
-H "Authorization: Bearer {token}" \
-H "Finch-API-Version: 2020-09-17" \
-X "POST"
-H "Content-Type: application/json" \
-d '{"type":"401k", "description": "Sample 401k", "frequency": \ "every_paycheck", "employee_deduction": {"type": "fixed",\ "amount": 100}, "company_contribution": {"type": "fixed", \ "amount": 100}}'
```

{% /tab %}

{% tab label="Example Response" %}

```json
{
  "benefit_id": "12345"
}
```

{% /tab %}
{% /tabs %}
