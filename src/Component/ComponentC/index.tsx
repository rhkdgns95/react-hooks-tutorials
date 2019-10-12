import React from "react";
import { AppContext, ChannelContext } from "../../App";

const ComponentC = (props) => {
    return (
        <AppContext.Consumer>
            {
                appData => (
                    <ChannelContext.Consumer>
                        {
                            channelData => (
                                 <div>
                                     <p>App Component Data: {appData.componentName}</p>
                                     <p>Channel Component Data: {channelData.componentName}</p>
                                 </div>
                            )
                        }
                    </ChannelContext.Consumer>
                )
            }
        </AppContext.Consumer>
    )
};

export default ComponentC;