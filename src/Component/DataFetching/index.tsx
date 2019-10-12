import React, { useEffect, useState } from "react";
import axios from "axios";

// References
// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/posts

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

const useFetch = () => {
    const [posts, setPosts] = useState<Array<IPost>>([]);
    
    const getPosts = async (): Promise<void> => {
        try {
            const { data } = await axios.get(URL);
            console.log("Data: ", data); 
            setPosts(data);
        } catch(error) {
            console.log(`Error: ${error}`);
        }
    }

    useEffect(() => {
        getPosts();
    }, []); // Only once.

    return {
        posts
    };
}

const DataFetching = () => {
    const { posts } = useFetch();
    return (
        <div>
            <ul>
                { posts.map(post => <li key={post.id}>{post.title}</li>)  }
            </ul>
        </div>
    )
};

export default DataFetching;