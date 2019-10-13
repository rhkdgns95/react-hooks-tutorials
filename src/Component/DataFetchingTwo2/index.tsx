import React, { useReducer, useEffect } from "react";
import axios from "axios";


interface IPost {
    userId: number;
    id: number;
    title: string;    
    body: string;
}
interface IState  {
    loading: boolean;
    error: string | null;
    post: IPost | {}
}

interface IAction {
    type: string;
    post: IPost | {};
    error: string | null;
}
const InitState: IState = {    
    loading: true,
    error: null,
    post: {}
};
const FETCH_SUCCESS: string = "FETCH_SUCCESS";
const FETCH_ERROR: string = "FETCH_ERROR";
const URL: string = "https://jsonplaceholder.typicode.com/posts/1";
const reducer: React.Reducer<IState, IAction> = (state, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return { ...state, loading: false, error: null, post: action.post};
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.error, post: {}};
        default:
            return { ...state, loading: false, erorr: "Reducer error", post: {}};
    }
}
const useFetch = () => {
    const [state, dispatch] = useReducer(reducer, InitState);
    const getPost = async(): Promise<void> => {
        try {
            const { data: post } = await axios.get(URL);
            dispatch({type: FETCH_SUCCESS, post, error: null});
        } catch(error) {
            dispatch({type: FETCH_ERROR, post: {}, error: error.message});
        }
    }
    useEffect(() => {
        getPost();
    }, []);
    return {
        state
    }
}
const DataFetchingTwo2 = () => {
    const { state: { loading, error, post } } = useFetch();
    return (
        <div>
            { loading && <p>Loading....</p> }
            { !loading && !error && post && <p>Post: {JSON.stringify(post)}</p> }
            { !loading && error && <p style={{color: "red"}}>Error: { error }</p> }
        </div>
    );
};

export default DataFetchingTwo2;