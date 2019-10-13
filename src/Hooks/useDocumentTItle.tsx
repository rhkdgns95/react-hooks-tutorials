import { useEffect } from "react"

const useDocumentTitle = (count: number) => {
    useEffect(() => {
        console.log("USE EFFECT");
        document.title = `Count - ${count}`;
    }, [count]);
}

export default useDocumentTitle;