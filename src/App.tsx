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
import AppProvider from "./Provider/AppProvider";
import ChannelProvider from "./Provider/ChannelProvider";
import CounterOne from "./Component/CounterOne";
import CounterTwo from "./Component/CounterTwo";
import CounterThree from "./Component/CounterThree";
import CalculatorProvider from "./Provider/CalculatorProvider";
import CalculatorComponentA from "./Component/CalculatorComponentA";
import CalculatorComponentB from "./Component/CalculatorComponentB";
import CalculatorComponentC from "./Component/CalculatorComponentC";

const App =  () => {
  return ( 
    <CalculatorProvider>
      <h1>- App Component -</h1>
      <CalculatorComponentA/>
      <CalculatorComponentB/>
      <CalculatorComponentC/>
    </CalculatorProvider>
  )
};

export default App;