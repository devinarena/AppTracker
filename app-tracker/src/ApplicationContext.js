import React from 'react'

export const AppsContext = React.createContext({
    apps: [],
    removeApp: () => {},
});