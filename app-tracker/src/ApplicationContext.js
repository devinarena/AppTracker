import React from 'react'

const AppsContext = React.createContext({
    theme: "light",
    apps: [],
    removeApp: () => { },
    addApp: () => { },
    updateApp: () => { },
    showPopup: () => { },
    createdApps: 0,
});

export default AppsContext;