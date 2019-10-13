import React, { useState, useEffect } from "react";
import axios from "axios";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const InitPost: IPost = {
    userId: -1,
    id: -1,
    title: '',
    body: ''
}

const URL: string = "https://jsonplaceholder.typicode.com/posts/1";

const useFetch = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<IPost>(InitPost);

    const getPost = async(): Promise<void> => {
        try {
            const { data }: {data: IPost} = await axios.get(URL);
            setLoading(false);
            setError("");
            setPost(data);
        } catch(error) {
            setLoading(false);
            setError(error.message);
            setPost(InitPost);
        }
    }

    useEffect(() => {
        getPost();    
    }, []);

    return {
        loading,
        error,
        post
    };
}

const DataFetchingOne = () => {
    const { loading, error, post } = useFetch();
    return (
        <div>
            {loading ? "Loading...." : (
                <ul>
                    <h3>Post</h3>
                    <li>{JSON.stringify(post)}</li>
                    <hr />
                    {
                        error !== '' && (
                            <div>
                                <h3>Error</h3>
                                <li>{error}</li>
                            </div>
                        )
                    }
                </ul>
            )}
        </div>
    )
};

export default DataFetchingOne;