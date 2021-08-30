import React from 'react'
import Application from './Application'

let appsContext = React.createContext([new Application("Amazon", "8/30/2021", 0, false, false)]);

export const AppsContextProvider = appsContext.Provider;
export const AppsContextConsumer = appsContext.Consumer;