import React, { useContext, ReactChildren } from "react";

interface IContext {
    componentName: string;
}
const AppContext: React.Context<IContext> = React.createContext<IContext>({componentName: ""});

export const useAppContext = () => useContext(AppContext);

const useAppProvider = () => {
    const value: IContext = {
        componentName: "Hello, This is App...."
    }
    return {
        value
    };
}
const AppProvider: React.PropsWithChildren<any> = ({children}) => {
    const data = useAppProvider();
    
    return (
        <AppContext.Provider {...data}>
            {
                children
            }
        </AppContext.Provider>
    )    
}

export default AppProvider;