import React from 'react'

const AppsContext = React.createContext({
    theme: "light",
    apps: [],
    removeApp: () => { },
    addApp: () => { },
    updateApp: () => { },
    showPopup: () => { },
    showDialog: () => { },
    createdApps: 0,
});

export default AppsContext;