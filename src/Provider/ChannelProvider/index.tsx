import React, { useContext } from "react";
interface IProps {
    componentName: string;
}
const ChannelContext: React.Context<IProps> = React.createContext<IProps>({componentName: ""});

export const useChannelContext = () => useContext(ChannelContext);

const useChannelProvider = () => {
    const value: IProps = {
        componentName: "Hello, This is Channel"
    };

    return {
        value
    };
}
const ChannelProvider = ({
    children
}) => {
    const data = useChannelProvider();
    
    return (
        <ChannelContext.Provider {...data}>
            {
                children
            }
        </ChannelContext.Provider>
    )
};

export default ChannelProvider;