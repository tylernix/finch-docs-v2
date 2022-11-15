import { useEffect, useState, Fragment } from "react"
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Combobox, Menu, Transition } from '@headlessui/react'

const DATA_FIELDS = [
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

]
const PROVIDER_COMPATIBILITY = [
    {
        provider_id: 'bamboohr',
        display_name: "Bamboo HR",
        logo: "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrLogo.svg",
        icon: null,
        products: [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        mfa_required: null,
        primary_color: null,
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
                paging: {
                    count: true,
                    offset: true
                },
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
            }
        }

    },
    {
        provider_id: 'gusto',
        display_name: "Gusto",
        logo: "https://finch-logos.s3.us-west-2.amazonaws.com/gustoLogo.svg",
        icon: null,
        products: [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        mfa_required: null,
        primary_color: null,
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
                paging: {
                    count: true,
                    offset: true
                },
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
            }
        }

    },
    {
        provider_id: 'justworks',
        display_name: "Justworks",
        logo: "https://finch-logos.s3.us-west-2.amazonaws.com/justworksLogo.svg",
        icon: null,
        products: [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        mfa_required: null,
        primary_color: null,
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
                paging: {
                    count: true,
                    offset: true
                },
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
            }
        }

    },
    {
        provider_id: 'workday',
        display_name: "Workday",
        logo: "https://finch-logos.s3.us-west-2.amazonaws.com/workdayLogo.svg",
        icon: null,
        products: [
            "directory",
            "individual",
            "employment"
        ],
        mfa_required: null,
        primary_color: null,
        compatibility: {
            company: null,
            directory: {
                paging: {
                    count: true,
                    offset: true
                },
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
            }
        }

    },
    {
        provider_id: 'paychex_flex',
        display_name: "Paychex Flex",
        logo: "https://finch-logos.s3.us-west-2.amazonaws.com/paychexFlexLogo.svg",
        icon: null,
        products: [
            "company",
            "directory",
            "individual",
            "employment"
        ],
        mfa_required: null,
        primary_color: null,
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
                paging: {
                    count: true,
                    offset: true
                },
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
            }
        }

    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Compatibility() {
    const [query, setQuery] = useState('')
    const [providerMenu, setProviderMenu] = useState(false)

    const [providerList, setProviderList] = useState(PROVIDER_COMPATIBILITY);
    const [dataFieldFilters, setDataFieldFilters] = useState(DATA_FIELDS);
    const [activeFilter, setActiveFilter] = useState([]);
    const [productFilter, setProductFilter] = useState({
        company: false,
        directory: false,
        individual: false,
        employment: false,
        payment: false,
        pay_statement: false
    });


    // if the query input field is blank and all product filters are not selected, show all fields
    const queryFields =
        query === '' && Object.values(productFilter).every((v) => v === false)
            ? DATA_FIELDS
            : DATA_FIELDS.filter((field) => {
                // if the product filters have not been selected, only filter on the query input field
                if (Object.values(productFilter).every((v) => v === false))
                    return field.name.toLowerCase().includes(query.toLowerCase())
                // otherwise, filter on both query input field and the product filter
                else
                    return field.name.toLowerCase().includes(query.toLowerCase()) && productFilter[field.product]
            })

    const providers =
        activeFilter == []
            ? PROVIDER_COMPATIBILITY
            : PROVIDER_COMPATIBILITY.filter(provider => {
                // check if the provider's field compatibility corresponds with the activeFilter fields
                return Object.values(activeFilter).every((f) => {

                    if (provider.compatibility[f.product]) {
                        const nestedFields = f.name.split('.')

                        //if the first field contains array brackets ex: accounts[], remove the brackets
                        if (/\[\]/.test(nestedFields[0])) {
                            nestedFields[0] = nestedFields[0].slice(0, -2)
                        }

                        var field = provider.compatibility[f.product]

                        // for each nested field, dynamically build the variable name to traverse the nested provider compatibility fields
                        nestedFields.forEach(nf => {
                            //console.log(field)
                            //console.log(nf)
                            //console.log(field[nf])
                            field = field[nf]
                        })

                        return field
                    } else {
                        return false
                    }
                })
            })

    return (
        <>
            <div className="not-prose flex items-end space-x-4">


                <Combobox as="div" value={activeFilter} onChange={setActiveFilter} multiple>
                    {/* <Combobox.Label className="block text-sm font-medium text-gray-700 dark:text-sky-400">Search</Combobox.Label> */}
                    <div className="relative mt-1">
                        <Combobox.Input
                            className="w-80 lg:w-96 rounded-md py-2 pl-3 pr-10 sm:text-sm border-none ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-gray-50 focus:outline-none focus:border-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-500 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500"
                            onChange={(event) => setQuery(event.target.value)}
                            displayValue={(field) => (field.length > 1) ? "Fields Selected: " + field.length : field[0]?.name}
                            placeholder="Search"
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Combobox.Button>

                        {queryFields.length > 0 && (
                            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-80 lg:w-96 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-800">
                                {queryFields.map((field) => (
                                    <Combobox.Option
                                        key={field.name}
                                        value={field}
                                        className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 pl-9 pr-4',
                                                active ? 'text-white bg-indigo-600 dark:bg-indigo-600/60 ' : 'text-gray-900 dark:text-slate-300'
                                            )
                                        }
                                    >
                                        {({ active, selected }) => (
                                            <>
                                                <div className="flex flex-col">
                                                    <span className={classNames('', selected && 'font-semibold')}>
                                                        {field.name}
                                                    </span>
                                                    <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'mt-0.5')}>
                                                        {field.description}
                                                    </span>
                                                </div>

                                                {selected && (
                                                    <span
                                                        className={classNames(
                                                            'absolute inset-y-0 left-0 flex items-top pt-2.5 pl-2',
                                                            active ? 'text-white' : 'text-indigo-600'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}
                    </div>
                </Combobox>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 border-none ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-gray-50 focus:outline-none focus:border-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-500 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500 dark:text-slate-300">
                            Products
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items static className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">

                            <fieldset className="space-y-3 py-3">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="company"
                                                    aria-describedby="company-description"
                                                    name="company"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.company}
                                                    onChange={() => setProductFilter({ ...productFilter, company: !productFilter.company })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600'
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="company" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Company
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="directory"
                                                    aria-describedby="directory-description"
                                                    name="directory"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.directory}
                                                    onChange={() => setProductFilter({ ...productFilter, directory: !productFilter.directory })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600'
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="directory" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Directory
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="individual"
                                                    aria-describedby="individual-description"
                                                    name="individual"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.individual}
                                                    onChange={() => setProductFilter({ ...productFilter, individual: !productFilter.individual })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600'
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="individual" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Individual
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="employment"
                                                    aria-describedby="employment-description"
                                                    name="employment"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.employment}
                                                    onChange={() => setProductFilter({ ...productFilter, employment: !productFilter.employment })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600'
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="employment" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Employment
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="payment"
                                                    aria-describedby="payment-description"
                                                    name="payment"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.payment}
                                                    onChange={() => setProductFilter({ ...productFilter, payment: !productFilter.payment })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600'
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="payment" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Payment
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className="relative flex items-start px-3">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="pay_statement"
                                                    aria-describedby="pay_statement-description"
                                                    name="pay_statement"
                                                    type="checkbox"
                                                    defaultChecked={productFilter.pay_statement}
                                                    onChange={() => setProductFilter({ ...productFilter, pay_statement: !productFilter.pay_statement })}
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-slate-800/75 dark:border-gray-500 dark:checked:border-none dark:checked:bg-indigo-600 '
                                                    )}
                                                />
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="pay_statement" className="font-medium text-gray-700 dark:text-slate-300">
                                                        Pay Statement
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </Menu.Item>
                            </fieldset>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-medium leading-4 text-white hover:bg-indigo-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-gray-50 focus:outline-none focus:border-none focus:ring-1 focus:ring-slate-300 dark:focus:ring-slate-300 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40 dark:hover:ring-slate-500 dark:bg-indigo-600/75 dark:hover:bg-indigo-700/75 dark:text-slate-300"
                    onClick={(event) => {
                        setActiveFilter([])
                        setProductFilter({
                            company: false,
                            directory: false,
                            individual: false,
                            employment: false,
                            payment: false,
                            pay_statement: false
                        })
                    }}
                >
                    Clear All
                </button>


            </div>
            {/* PROVIDER LIST */}
            <div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3 pt-4">
                {providers.map(provider => (

                    <div key={provider.provider_id} className="relative rounded-lg border-none bg-white px-1 py-1 shadow-sm flex flex-col items-center space-x-3 ring-1 ring-slate-200 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 dark:bg-slate-800/75 dark:ring-inset dark:ring-white/5 dark:hover:bg-slate-700/40">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-20 rounded-full" src={provider.logo} alt="" />
                        </div>
                        <div className="flex-1 min-w-0 self-start">
                            <a href={`/docs/${provider.provider_id}`} className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                <p className="text-sm font-medium text-gray-900 dark:text-slate-300">{provider.display_name}</p>
                                <p className="text-sm text-gray-500 truncate !mt-0">Automated API</p>
                            </a>
                        </div>
                    </div>

                ))}
            </div>
            <pre>
                Active Filter <br></br>
                {JSON.stringify(activeFilter, null, 2)}
            </pre>
            <pre>
                Valid Providers <br></br>
                {JSON.stringify(providers.map(p => p.display_name), null, 2)}
            </pre>

            <pre>
                Query Fields <br></br>
                {JSON.stringify(queryFields, null, 2)}
            </pre>
            <pre>
                Product Filter <br></br>
                {JSON.stringify(productFilter, null, 2)}
            </pre>

        </>


    )

}