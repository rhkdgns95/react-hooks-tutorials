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
    const [idFromButtonClick , setIdFromButtonClick] = useState(1);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { target: { name, value }} = event;
        if(parseInt(value) > 100) {
            alert("최대 100이하 숫자를 입력해주세요.")
            setId(100);
        } else if(parseInt(value) < 1 || value === "") {
            alert("최소 1이상 숫자를 입력해주세요.")
            setId(1);
        } else {
            setId(parseInt(value));
        }
    }
    
    const handleClick = () => {
        if(id <= 0 || id > 100) {
            alert("에러");
            return;
        }
        setIdFromButtonClick(id);
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
    }, [idFromButtonClick]);
    
    return {
        id,
        post,
        onChange,
        handleClick
    }
};

const DataFetchingTwo = () => {
    const { id: postId, post, onChange , handleClick } = useFetching(1);
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
            {
                 (postId >= 1 || postId <= 100) && <button onClick={e => handleClick()}>Submit</button>
            }
        </div>
    )
};

export default DataFetchingTwo;