import React from 'react'

const AppsContext = React.createContext({
    apps: [],
    removeApp: () => {},
    addApp: () => {},
});

export default AppsContext;