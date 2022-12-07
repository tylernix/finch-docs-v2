export const DATA_FIELDS = [
    {
        name: "legal_name",
        description: "The legal name of the company.",
        product: "company",
    },
    {
        name: "entity",
        description: "The entity type object.",
        product: "company",
    },
    {
        name: "entity.type",
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
    {
        name: "individuals[].first_name",
        description: "The legal first name of the individual.",
        product: "directory",
    },
    {
        name: "individuals[].middle_name",
        description: "The legal middle name of the individual.",
        product: "directory",
    },
    {
        name: "individuals[].last_name",
        description: "The legal last name of the individual.",
        product: "directory",
    },
    {
        name: "individuals[].manager.id",
        description: "A stable Finch Id (UUID v4) representing the manager of the individual within the organization.",
        product: "directory",
    },
    {
        name: "individuals[].department.name",
        description: "The name of the individual's current department.",
        product: "directory",
    },
    {
        name: "individuals[].is_active",
        description: "Returns 'true' if the individual is an active employee or contractor at the company.",
        product: "directory",
    },
    {
        name: "first_name",
        description: "The legal first name of the individual.",
        product: "individual",
    },
    {
        name: "middle_name",
        description: "The legal middle name of the individual.",
        product: "individual",
    },
    {
        name: "last_name",
        description: "The legal last name of the individual.",
        product: "individual",
    },
    {
        name: "preferred_name",
        description: "The preferred name of the individual.",
        product: "individual",
    },
    {
        name: "emails[].type",
        description: "The type of email of the individual.",
        product: "individual",
    },
    {
        name: "emails[].data",
        description: "An email of the individual.",
        product: "individual",
    },
    {
        name: "phone_numbers[].type",
        description: "The type of phone number of the individual.",
        product: "individual",
    },
    {
        name: "phone_numbers[].data",
        description: "A phone number of the individual.",
        product: "individual",
    },
    {
        name: "gender",
        description: "The gender of the individual.",
        product: "individual",
    },
    {
        name: "dob",
        description: "The date of birth of the individual.",
        product: "individual",
    },
    {
        name: "residence.line1",
        description: "Street address or PO box.",
        product: "individual",
    },
    {
        name: "residence.line2",
        description: "Apartment, suite, unit, or building.",
        product: "individual",
    },
    {
        name: "residence.city",
        description: "City, district, suburb, town, or village.",
        product: "individual",
    },
    {
        name: "residence.state",
        description: "The state code.",
        product: "individual",
    },
    {
        name: "residence.postal_code",
        description: "The postal code or zip code.",
        product: "individual",
    },
    {
        name: "residence.country",
        description: "The 2-letter ISO 3166 country code.",
        product: "individual",
    },
    {
        name: "first_name",
        description: "The legal first name of the individual.",
        product: "employment",
    },
    {
        name: "middle_name",
        description: "The legal middle name of the individual.",
        product: "employment",
    },
    {
        name: "last_name",
        description: "The legal last name of the individual.",
        product: "employment",
    },
    {
        name: "title",
        description: "The current title of the individual.",
        product: "employment",
    },
    {
        name: "manager.id",
        description: "A stable Finch Id (UUID v4) representing the manager of the individual within the organization.",
        product: "employment",
    },
    {
        name: "department.name",
        description: "The name of the department associated with the individual.",
        product: "employment",
    },
    {
        name: "employment.type",
        description: "The main employment type of the individual.",
        product: "employment",
    },
    {
        name: "employment.subtype",
        description: "The secondary employment type of the individual.",
        product: "employment",
    },
    {
        name: "start_date",
        description: "The first date of employment of the individual.",
        product: "employment",
    },
    {
        name: "end_date",
        description: "The last date of employment of the individual.",
        product: "employment",
    },
    {
        name: "is_active",
        description: "Returns 'true' if the individual is an active employee or contractor at the company.",
        product: "employment",
    },
    {
        name: "class_code",
        description: "Worker's compensation classification code for this employee",
        product: "employment",
    },
    {
        name: "location.line1",
        description: "Street address or PO box.",
        product: "employment",
    },
    {
        name: "location.line2",
        description: "Apartment, suite, unit, or building.",
        product: "employment",
    },
    {
        name: "location.city",
        description: "City, district, suburb, town, or village.",
        product: "employment",
    },
    {
        name: "location.state",
        description: "The state code.",
        product: "employment",
    },
    {
        name: "location.postal_code",
        description: "The postal code or zip code.",
        product: "employment",
    },
    {
        name: "location.country",
        description: "The 2-letter ISO 3166 country code.",
        product: "employment",
    },
    {
        name: "income.unit",
        description: "The income unit of payment",
        product: "employment",
    },
    {
        name: "income.amount",
        description: "The income amount in cents.",
        product: "employment",
    },
    {
        name: "income.currency",
        description: "The currency code.",
        product: "employment",
    },
    {
        name: "income.effective_date",
        description: "The date the income amount went into effect.",
        product: "employment",
    },
    {
        name: "income_history[].unit",
        description: "The income unit of payment",
        product: "employment",
    },
    {
        name: "income_history[].amount",
        description: "The income amount in cents.",
        product: "employment",
    },
    {
        name: "income_history[].currency",
        description: "The currency code.",
        product: "employment",
    },
    {
        name: "income_history[].effective_date",
        description: "The date the income amount went into effect.",
        product: "employment",
    },
    {
        name: "pay_period.start_date",
        description: "The first day of the pay period.",
        product: "payment",
    },
    {
        name: "pay_period.end_date",
        description: "The last day of the pay period.",
        product: "payment",
    },
    {
        name: "pay_date",
        description: "The date on which employees are paid.",
        product: "payment",
    },
    {
        name: "debit_date",
        description: "The date on which the payroll provider debits the payroll amount into the bank account of the employer.",
        product: "payment",
    },
    {
        name: "company_debit.amount",
        description: "The company debit amount in cents.",
        product: "payment",
    },
    {
        name: "company_debit.currency",
        description: "The currency code for company debit.",
        product: "payment",
    },
    {
        name: "gross_pay.amount",
        description: "The company debit amount in cents.",
        product: "payment",
    },
    {
        name: "gross_pay.currency",
        description: "The currency code for gross pay.",
        product: "payment",
    },
    {
        name: "net_pay.amount",
        description: "The net pay amount in cents.",
        product: "payment",
    },
    {
        name: "net_pay.currency",
        description: "The currency code for net pay.",
        product: "payment",
    },

    {
        name: "employer_taxes.amount",
        description: "The employer taxes amount in cents.",
        product: "payment",
    },
    {
        name: "employer_taxes.currency",
        description: "The currency code for employer taxes.",
        product: "payment",
    },
    {
        name: "employee_taxes.amount",
        description: "The employee taxes amount in cents.",
        product: "payment",
    },
    {
        name: "employee_taxes.currency",
        description: "The currency code for employee taxes.",
        product: "payment",
    },
    {
        name: "individual_ids[]",
        description: "An array of stable Finch Ids (UUID v4) representing every individual on this payment.",
        product: "payment",
    },



]
export const PROVIDER_COMPATIBILITY = [
    {
        "id": "adp_run",
        "display_name": "Run Powered by ADP",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/adpIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/adpLogo.svg",
        "mfa_required": false,
        "primary_color": "#cf261d",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: false
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: false
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: false,
                    end_date: false,
                },
                pay_date: true,
                debit_date: false,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "bamboo_hr",
        "display_name": "BambooHR",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrLogo.svg",
        "mfa_required": false,
        "primary_color": "#ff5745",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "bamboo_hr_api",
        "display_name": "BambooHR (API)",
        "products": [
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrLogo.svg",
        "mfa_required": false,
        "primary_color": "#ff5745",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "bob",
        "display_name": "bob",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/bobIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/bobLogo.png",
        "mfa_required": false,
        "primary_color": "#ff962b",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: false,
                entity: {
                    type: false,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: false,
                locations: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false,
        }
    },
    // {
    //     "id": "greenhouse",
    //     "display_name": "Greenhouse",
    //     "products": [
    //         "jobs",
    //         "candidates",
    //         "applications",
    //         "offers"
    //     ],
    //     "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/greenhouseIcon.png",
    //     "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/greenhouseLogo.png",
    //     "mfa_required": false,
    //     "primary_color": "#24A47F",
    //     "manual": false,
    //     "category": "ats"
    // },
    {
        "id": "gusto",
        "display_name": "Gusto",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement",
            "deduction",
            "benefits"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/gustoIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/gustoLogo.svg",
        "mfa_required": true,
        "primary_color": "#f45d47",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: false,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: true,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "humaans",
        "display_name": "Humaans",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/humaansIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/humaansLogo.svg",
        "mfa_required": false,
        "primary_color": "#EB615C",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: false,
                    subtype: false
                },
                primary_email: true,
                primary_phone_number: true,
                ein: false,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false,
        }
    },
    {
        "id": "insperity",
        "display_name": "Insperity",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/insperityIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/insperityLogo.svg",
        "mfa_required": true,
        "primary_color": "#439639",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: false,
                locations: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: false,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: false,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "justworks",
        "display_name": "Justworks",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/justworksIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/justworksLogo.svg",
        "mfa_required": true,
        "primary_color": "#39b6e9",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: false,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: true,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: false,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    // {
    //     "id": "lever",
    //     "display_name": "Lever",
    //     "products": [
    //         "jobs",
    //         "candidates",
    //         "applications",
    //         "offers"
    //     ],
    //     "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/leverIcon.png",
    //     "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/leverLogo.png",
    //     "mfa_required": false,
    //     "primary_color": "#262933",
    //     "manual": false,
    //     "category": "ats"
    // },
    {
        "id": "namely",
        "display_name": "Namely",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/namelyIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/namelyLogo.svg",
        "mfa_required": false,
        "primary_color": "#276DF6",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "paychex_flex",
        "display_name": "Paychex Flex",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paychexFlexIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paychexFlexLogo.svg",
        "mfa_required": false,
        "primary_color": "#004b8d",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: false,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: false,
                    institution_name: true,
                    account_type: false,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "paychex_flex_api",
        "display_name": "Paychex Flex (API)",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paychexFlexIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paychexFlexLogo.svg",
        "mfa_required": false,
        "primary_color": "#004b8d",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: false
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "paycom",
        "display_name": "Paycom",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paycomIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paycomLogo.png",
        "mfa_required": true,
        "primary_color": "#006242",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: false,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: false,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: false
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: true,
                    postal_code: false,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: false,
                    payment_method: false,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "paycom_api",
        "display_name": "Paycom (API)",
        "products": [
            "directory",
            "individual",
            "employment",
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paycomIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paycomLogo.png",
        "mfa_required": true,
        "primary_color": "#006242",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: false,
                    type: false
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "paylocity",
        "display_name": "Paylocity",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paylocityIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paylocityLogo.svg",
        "mfa_required": true,
        "primary_color": "#ff6611",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: true,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: false,
                        name: false,
                        amount: false,
                        currency: false,
                        pre_tax: false,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "paylocity_api",
        "display_name": "Paylocity (API)",
        "products": [
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/paylocityIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/paylocityLogo.svg",
        "mfa_required": true,
        "primary_color": "#ff6611",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: false,
                employee_taxes: false,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: false,
                    payment_method: false,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: false,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "personio",
        "display_name": "Personio",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/personioIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/personioLogo.svg",
        "mfa_required": false,
        "primary_color": "#010000",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: false,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: false,
                locations: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: false,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: false,
                    type: false
                },
                dob: false,
                residence: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: false
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "quickbooks",
        "display_name": "Quickbooks",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/quickbooksIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/quickbooksLogo.svg",
        "mfa_required": true,
        "primary_color": "#39b6e9",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: false,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: false
                },
                department: {
                    name: false
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: false,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "rippling",
        "display_name": "Rippling",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/ripplingIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/ripplingLogo.png",
        "mfa_required": true,
        "primary_color": "#000000",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "sage_hr",
        "display_name": "Sage HR",
        "products": [
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/sageHrIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/sageHrLogo.svg",
        "mfa_required": false,
        "primary_color": "#00d639",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: false,
                    line2: false,
                    city: false,
                    state: false,
                    postal_code: false,
                    country: false,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "sapling",
        "display_name": "Sapling",
        "products": [
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/saplingIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/saplingLogo.svg",
        "mfa_required": false,
        "primary_color": "#4524cd",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: false
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "sequoia_one",
        "display_name": "Sequoia One",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/sequoiaIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/sequoiaLogo.png",
        "mfa_required": true,
        "primary_color": "#8BCF24",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: true,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: false,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: false,
                    payment_method: false,
                    total_hours: false,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "square_payroll",
        "display_name": "Square Payroll",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/squareIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/squareLogo.svg",
        "mfa_required": true,
        "primary_color": "#000000",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: false,
                    type: false
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: false
                },
                department: {
                    name: false
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: false,
                        name: false,
                        amount: false,
                        currency: false,
                        pre_tax: false,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "trinet",
        "display_name": "TriNet",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/trinetIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/trinetLogo.svg",
        "mfa_required": true,
        "primary_color": "#f47b29",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: true,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "trinet_api",
        "display_name": "TriNet (API)",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/trinetIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/trinetLogo.svg",
        "mfa_required": true,
        "primary_color": "#f47b29",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: false,
                    subtype: false
                },
                primary_email: false,
                primary_phone_number: false,
                ein: false,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: true
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: false,
                net_pay: false,
                employer_taxes: false,
                employee_taxes: false,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: false,
                    payment_method: false,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: false,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: false,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "ulti_pro",
        "display_name": "UltiPro",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/ultiproIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/ultiproLogo.svg",
        "mfa_required": false,
        "primary_color": "#4fa046",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: true,
                ein: true,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: false
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: false
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: false,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: false,
                    payment_method: false,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: false,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "wave",
        "display_name": "Wave",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/waveIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/waveLogo.svg",
        "mfa_required": true,
        "primary_color": "#001B65",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: true,
                ein: true,
                department: false,
                departments: {
                    name: false,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: false,
                accounts: {
                    routing_number: false,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: false
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: false
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: false,
                    type: false
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: false,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: false,
                manager: {
                    id: false
                },
                department: {
                    name: false
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: true,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: false,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "workday",
        "display_name": "Workday",
        "products": [
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/workdayIcon.svg",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/workdayLogo.svg",
        "mfa_required": false,
        "primary_color": "#0875e1",
        "manual": false,
        "category": "hris",
        compatibility: {
            company: false,
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: false
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: false,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    },
    {
        "id": "zenefits",
        "display_name": "Zenefits",
        "products": [
            "company",
            "directory",
            "individual",
            "employment",
            "payment",
            "pay_statement"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/zenefitsIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/zenefitsLogo.svg",
        "mfa_required": true,
        "primary_color": "#ff5745",
        "manual": false,
        "country_code_format": "iso",
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: true,
                primary_phone_number: true,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: true
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: false,
                    institution_name: false,
                    account_type: false,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: true,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: false
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: true,
                last_name: true,
                title: true,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: true,
                },
                class_code: false
            },
            payment: {
                id: true,
                pay_period: {
                    start_date: true,
                    end_date: true,
                },
                pay_date: true,
                debit_date: false,
                company_debit: true,
                gross_pay: true,
                net_pay: true,
                employer_taxes: true,
                employee_taxes: true,
                individual_ids: true,

            },
            pay_statement: {
                pay_statement: true,
                pay_statements: {
                    individual_id: true,
                    type: true,
                    payment_method: true,
                    total_hours: true,
                    gross_pay: true,
                    net_pay: true,
                    earnings: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                    },
                    employee_deductions: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        pre_tax: true,
                    },
                    employer_contributions: {
                        name: false,
                        amount: false,
                        currency: false,
                    },
                    taxes: {
                        type: true,
                        name: true,
                        amount: true,
                        currency: true,
                        employer: true
                    },

                }
            }
        }
    },
    {
        "id": "zenefits_api",
        "display_name": "Zenefits (API)",
        "products": [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        "icon": "https://finch-logos.s3.us-west-2.amazonaws.com/zenefitsIcon.png",
        "logo": "https://finch-logos.s3.us-west-2.amazonaws.com/zenefitsLogo.svg",
        "mfa_required": true,
        "primary_color": "#ff5745",
        "manual": false,
        "country_code_format": "iso",
        "category": "hris",
        compatibility: {
            company: {
                id: true,
                legal_name: true,
                entity: {
                    type: true,
                    subtype: true
                },
                primary_email: false,
                primary_phone_number: false,
                ein: true,
                department: true,
                departments: {
                    name: true,
                    parent: {
                        name: false
                    }
                },
                location: true,
                locations: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                account: true,
                accounts: {
                    routing_number: true,
                    account_name: false,
                    institution_name: true,
                    account_type: true,
                    account_number: true
                }
            },
            directory: {
                individuals: {
                    id: true,
                    first_name: true,
                    middle_name: false,
                    last_name: true,
                    manager: {
                        id: true
                    },
                    department: {
                        name: true
                    },
                    is_active: true
                }
            },
            individual: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                preferred_name: true,
                email: true,
                emails: {
                    data: true,
                    type: true
                },
                phone_numbers: {
                    data: true,
                    type: true
                },
                dob: true,
                residence: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true
                },
                gender: true
            },
            employment: {
                id: true,
                first_name: true,
                middle_name: false,
                last_name: true,
                title: false,
                manager: {
                    id: true
                },
                department: {
                    name: true
                },
                employment: {
                    type: true,
                    subtype: true
                },
                start_date: true,
                end_date: true,
                is_active: true,
                location: {
                    line1: true,
                    line2: true,
                    city: true,
                    state: true,
                    postal_code: true,
                    country: true,
                },
                income: {
                    unit: true,
                    amount: true,
                    currency: true,
                    history: false,
                },
                class_code: false
            },
            payment: false,
            pay_statement: false
        }
    }
]