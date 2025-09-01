import { useEffect, useRef, useState } from "react"

export default function Fifth() {
    const abortControllerRef = useRef(null);
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller =new AbortController();
        abortControllerRef.current = controller;

        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`, {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Previous request cancelled");
                }
            });

        return () => {
            controller.abort();
        };
    }, [query]);




    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts..."
            />            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
