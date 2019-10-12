import React, { useContext } from "react";
import HookCounter from "./Component/HookCounter";
import HookCounterTwo from "./Component/HookCounterTwo";
import HookCounterThree from "./Component/HookCounterThree";
import HookCounterFour from "./Component/HookCounterFour";
import HookCounterOne from "./Component/HookCounterOne";
import HookMouse from "./Component/HookMouse";
import MouseContainer from "./Component/MouseContainer";
import IntervalHookCounter from "./Component/IntervalHookCounter";
import IntervalHookCounterTwo from "./Component/IntervalHookCounterTwo";
import DataFetching from "./Component/DataFetching";
import DataFetchingTwo from "./Component/DataFetchingTwo";
import ComponentC from "./Component/ComponentC";

interface IProps {
  componentName: string;
}

export const AppContext: React.Context<IProps> = React.createContext<IProps>({componentName: "APP"});
export const ChannelContext: React.Context<IProps> = React.createContext<IProps>({componentName: "Channel"})

const App =  () => {
  const value = {
    componentName: "hel",
  };
  const value2 = {
    componentName: "New World"
  };

  console.log("VALUE: ", value);
  return (
    <AppContext.Provider {...{value}}>
      <ChannelContext.Provider value={value2}>
        <ComponentC />
      </ChannelContext.Provider>
    </AppContext.Provider>
  )
};

export default App;