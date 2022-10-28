// components/Tabs.js

import React from 'react';
import { Tab as HeadlessTab } from '@headlessui/react'

export const TabContext = React.createContext();

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Tabs({ labels, children }) {
    const [
        currentTab,
        setCurrentTab
    ] = React.useState(labels[0]);

    return (
        <TabContext.Provider value={currentTab}>
            <HeadlessTab.Group>
                <HeadlessTab.List>
                    {labels.map((label) => (
                        <HeadlessTab
                            key={label}
                            onClick={() => setCurrentTab(label)}
                            className={({ selected }) => classNames(
                                selected
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-700',
                                'whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm'
                            )}
                        >
                            {label}
                        </HeadlessTab>
                    ))}
                </HeadlessTab.List>
                {children}

            </HeadlessTab.Group>

        </TabContext.Provider>
    );
};

export function Tab({ label, children }) {
    const currentTab = React.useContext(TabContext);

    if (label !== currentTab) {
        return null;
    }

    return children;
}