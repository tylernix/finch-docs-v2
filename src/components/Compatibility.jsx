import { useEffect, useState, Fragment } from "react"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

const PROVIDERS = [
    {
        id: 1,
        display_name: "Bamboo HR",
        logo_src: "https://finch-logos.s3.us-west-2.amazonaws.com/bambooHrLogo.svg",
        company_id: true,
        company_entity: true,
        company_locations: true,
        company_primary_email: true,
        directory_individuals_manager: true,
        payments_id: false
    },
    {
        id: 2,
        display_name: "Gusto",
        logo_src: "https://finch-logos.s3.us-west-2.amazonaws.com/gustoLogo.svg",
        company_id: true,
        company_entity: true,
        company_locations: true,
        company_primary_email: true,
        directory_individuals_manager: true,
        payments_id: true,
    },
    {
        id: 3,
        display_name: "Justworks",
        logo_src: "https://finch-logos.s3.us-west-2.amazonaws.com/justworksLogo.svg",
        company_id: true,
        company_entity: true,
        company_locations: true,
        company_primary_email: false,
        directory_individuals_manager: true,
        payments_id: true
    },
    {
        id: 4,
        display_name: "Workday",
        logo_src: "https://finch-logos.s3.us-west-2.amazonaws.com/workdayLogo.svg",
        company_id: false,
        company_entity: false,
        company_locations: false,
        company_primary_email: false,
        directory_individuals_manager: false,
        payments_id: false,
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function Compatibility() {
    const [providerList, setProviderList] = useState(PROVIDERS);
    const [dataFieldFilters, setDataFieldFilters] = useState([
        {
            id: 10,
            name: "primary_email",
            description: "- employees primary email",
            value: "company_primary_email"
        },
        {
            id: 11,
            name: "individuals[].manager",
            description: "- view an employee's manager",
            value: "directory_individuals_manager"
        },
        {
            id: 12,
            name: "payments[].id",
            description: "- List every payment's system id",
            value: "payments_id"
        },

    ]);
    const [activeFilter, setActiveFilter] = useState([]);
    const [query, setQuery] = useState('')


    const [selectedField, setSelectedField] = useState(null)

    const filteredFields =
        query === ''
            ? dataFieldFilters
            : dataFieldFilters.filter((field) => {
                return field.name.toLowerCase().includes(query.toLowerCase())
            })

    function onFilterChange(filter) {
        if (filter === "ALL") {
            if (activeFilter.length === dataFieldFilters.length) {
                setActiveFilter([]);
            } else {
                setActiveFilter(dataFieldFilters.map(filter => filter.value));
            }
        } else {
            if (activeFilter.includes(filter)) {
                const filterIndex = activeFilter.indexOf(filter);
                const newFilter = [...activeFilter];
                newFilter.splice(filterIndex, 1);
                setActiveFilter(newFilter);
            } else {
                setActiveFilter([...activeFilter, filter]);
            }
        }
    }

    let filteredList;
    if (
        activeFilter.length === 0 ||
        activeFilter.length === dataFieldFilters.length
    ) {
        filteredList = providerList;
    } else {
        filteredList = providerList.filter(item =>
            item[activeFilter] == true
        );
    }

    return (
        
    )

    return (
        <Combobox as="div" value={selectedField} onChange={setSelectedField} multiple>
            <Combobox.Label className="block text-sm font-medium text-gray-700">Provider data fields</Combobox.Label>
            <div className="relative mt-1">
                <Combobox.Input
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(field) => field?.name}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredFields.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredFields.map((field) => (
                            <Combobox.Option
                                key={field.id}
                                value={field}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <span className={classNames('block truncate', selected && 'font-semibold')}>{field.name}</span>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
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
    )

    return (
        <div className="searchContainer">
            <form>
                <fieldset className="space-y-5 mb-4">
                    <legend className="sr-only">Providers</legend>
                    <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                            <input id="all"
                                type="checkbox"
                                checked={activeFilter.length === dataFieldFilters.length}
                                onClick={() => onFilterChange("ALL")}
                                aria-describedby="all-description"
                                name="all"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700">All providers</label>
                            <span id="all-description" className="text-gray-500"> so you know how many we offer</span>
                        </div>
                    </div>
                    {dataFieldFilters.map(filter => (
                        <>
                            <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input id={filter.id}
                                        type="checkbox"
                                        checked={activeFilter.includes(filter.value)}
                                        onClick={() => onFilterChange(filter.value)}
                                        aria-describedby="all-description"
                                        name="all"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor={filter.id} className="font-medium text-gray-700">{filter.name}</label>
                                    <span id="all-description" className="text-gray-500"> {filter.description}</span>
                                </div>
                            </div>
                        </>
                    ))}

                </fieldset>


            </form>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredList.map(item => (

                    <div key={item.id} className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0">
                            <img className="h-20 w-20 rounded-full" src={item.logo_src} alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                <p className="text-sm font-medium text-gray-900">{item.display_name}</p>
                                <p className="text-sm text-gray-500 truncate !mt-0">Automated</p>
                            </a>
                        </div>
                    </div>

                ))}
            </div>

            {/* <pre>{JSON.stringify(filteredList, null, 2)}</pre>
            <pre>{JSON.stringify(activeFilter, null, 2)}</pre> */}
        </div>
    )
}