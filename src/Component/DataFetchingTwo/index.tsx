import React, { useState, useEffect } from "react";
import axios from "axios";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const URL: string = "https://jsonplaceholder.typicode.com/posts";

const InitPost: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
};

const useFetching = (initId: number) => {
    const [id, setId] = useState<number>(initId);
    const [post, setPost] = useState<IPost>(InitPost);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        setId(value === "" ? 1 : parseInt(value));
    }
    const getPost = async (): Promise<void> => {
        const newUrl: string = `${URL}/${id}`;
        try {
            const { data } = await axios.get(newUrl);
            setPost({...data});
        } catch(error) {
            console.log(`Error: ${error}`);
        }
    }
    useEffect(() => {
        getPost();
    }, [id]);
    return {
        id,
        post,
        onChange
    }
};

const DataFetchingTwo = () => {
    const { id: postId, post, onChange} = useFetching(1);
    const { userId, id, body, title } = post;
    return (
        <div>
            <input type={"text"} value={postId} name={"id"} onChange={onChange}/>
            <ul>
                <li>userId: { userId }</li>
                <li>id: { id }</li>
                <li>title: { title }</li>
                <li>body: { body }</li>
            </ul>
        </div>
    )
};

export default DataFetchingTwo;