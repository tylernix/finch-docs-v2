import { useEffect, useState, Fragment } from "react"

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

    const [searchList, setSearchList] = useState([
        {
            id: 1,
            type: "PART_TIME",
            name: "Akash",
            location: "bangalore",
            experience: 1
        },
        {
            id: 2,
            type: "PART_TIME",
            name: "feroz",
            location: "mumbai",
            experience: 3
        },
        {
            id: 3,
            type: "FULL_TIME",
            name: "Farheen",
            location: "agra",
            experience: 5
        },
        {
            id: 4,
            type: "FREELANCER",
            name: "Raju",
            location: "chennai",
            experience: 6
        },
        {
            id: 5,
            type: "FULL_TIME",
            name: "Asif",
            location: "vegas",
            experience: 7
        }
    ])
    const [filterList, setFilterList] = useState([
        {
            id: 11,
            name: "Part Time",
            value: "PART_TIME"
        },
        {
            id: 12,
            name: "Full Time",
            value: "FULL_TIME"
        },
        {
            id: 13,
            name: "Freelancer",
            value: "FREELANCER"
        }
    ]);
    //const [activeFilter, setActiveFilter] = useState([]);
    //const [field_company_locations, set_field_company_locations] = useState(true);
    //const [field_directory_individuals_manager, set_directory_individuals_manager] = useState(false);

    // function isCompatible(provider) {
    //     return field_company_locations && provider.company.locations == true
    // }

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