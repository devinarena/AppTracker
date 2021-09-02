import React from 'react'

const AppsContext = React.createContext({
    apps: [],
    removeApp: () => {},
    addApp: () => {},
    updateApp: () => {},
    createdApps: 0,
});

export default AppsContext;