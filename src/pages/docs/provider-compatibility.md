---
title: Provider Data Compatibility
description: 
---

Finch APIs try to maintain parity between all providers. However, every now and then, a provider may not support a specific data field (for example: job titles). This section outlines the compatibility of each data field per Automated API Provider and any other miscellaneous information that's important to know.

## Search Data Fields

{% compatibility / %}

## Supported Data Fields

### Company

Name | Description
---------|----------
legal_name | The legal name of the company.
entity | The entity type object.
entity.type | The tax payer type of the company.
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test
test | test

### Directory

    {
        name: "",
        description: "The tax payer type of the company.",
        allowed_value: [
            "llc",
            "corporation",
            "sole_proprietor",
            "non_profit",
            "partnership",
            "cooperative",
            "null"
        ],
        product: "company",
    },
    {
        name: "entity.subtype",
        description: "The tax payer subtype of the company.",
        allowed_value: [
            "s_corporation",
            "c_corporation",
            "b_corporation",
            "null"
        ],
        product: "company",
    },
    {
        name: "primary_email",
        description: "The email of the main administrator on the account.",
        product: "company",
    },
    {
        name: "primary_phone_number",
        description: "The phone number of the main administrator on the account. Format: XXXXXXXXXX",
        product: "company",
    },
    {
        name: "departments",
        description: "An array of company departments.",
        product: "company",
    },
    {
        name: "departments[].name",
        description: "The department name.",
        product: "company",
    },
    {
        name: "departments[].parent",
        description: "The parent department, if present.",
        product: "company",
    },
    {
        name: "departments[].parent.name",
        description: "The parent department's name.",
        product: "company",
    },
    {
        name: "ein",
        description: "The employer identification number.",
        product: "company",
    },
    {
        name: "locations",
        description: "The array of company locations.",
        product: "company",
    },
    {
        name: "locations[].line1",
        description: "Street address or PO box.",
        product: "company",
    },
    {
        name: "locations[].line2",
        description: "Apartment, suite, unit, or building.",
        product: "company",
    },
    {
        name: "locations[].city",
        description: "City, district, suburb, town, or village.",
        product: "company",
    },
    {
        name: "locations[].state",
        description: "The state code.",
        product: "company",
    },
    {
        name: "locations[].postal_code",
        description: "The postal code or zip code.",
        product: "company",
    },
    {
        name: "locations[].country",
        description: "The 2-letter ISO 3166 country code.",
        product: "company",
    },
    {
        name: "accounts",
        description: "An array of bank account objects associated with the payroll or HRIS system.",
        product: "company",
    },
    {
        name: "accounts[].routing_number",
        description: "A nine-digit code that's based on the U.S. Bank location where your account was opened.",
        product: "company",
    },
    {
        name: "accounts[].account_name",
        description: "The name of the bank associated in the payroll or HRIS system.",
        product: "company",
    },
    {
        name: "accounts[].institution_name",
        description: "The name of the banking institution.",
        product: "company",
    },
    {
        name: "accounts[].account_type",
        description: "The type of bank account.",
        allowed_value: [
            "checking",
            "savings",
            "null"
        ],
        product: "company",
    },
    {
        name: "accounts[].account_number",
        description: "A 10-12 digit number to specify the bank account.",
        product: "company",
    },
