import { useState } from "react";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}