import React, { useContext, useReducer, ReactChildren, Dispatch } from "react";


interface ICount {
    firstCount: number;
    secondCount: number;
}
interface IAction {
    type: string;
    value: number;
}

const initCount: ICount = {
    firstCount: 0,
    secondCount: 100
};

interface ICalculatorProvider {
    count: ICount;
    dispatchCount: React.Dispatch<IAction>;
}

const reducer: React.Reducer<ICount, IAction> = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state, firstCount: state.firstCount + action.value };
        case "decrement":
            return { ...state, firstCount: state.firstCount - action.value };
        case "increment2":
            return { ...state, secondCount: state.secondCount + action.value };
        case "decrement2":
            return { ...state, secondCount: state.secondCount - action.value };
        case "reset":
            return { ...initCount };
        default: 
            throw new Error("Reducer Error.");
    }
}

const CalculatorContext: React.Context<ICalculatorProvider> = React.createContext<ICalculatorProvider>({count: initCount, dispatchCount: () => ""});
const useCalculatorContext = () => useContext(CalculatorContext);

const UseCalculatorProvider = () => {
    const [count, dispatchCount] = useReducer(reducer, initCount);
    return {
        value: {
            count,
            dispatchCount
        }
    }
}

const CalculatorProvider: React.FC<any> = ({children}) => {

    const data = UseCalculatorProvider();
    const {value: { count: {firstCount, secondCount}}} = data;
    return (
        <CalculatorContext.Provider {...data}>
            <h1>Calculator Provider. firstCount: {firstCount}</h1>
            <h1>Calculator Provider. secondCount: {secondCount}</h1>
            {
                children
            }
        </CalculatorContext.Provider>
    )
}
export { useCalculatorContext };
export default CalculatorProvider;