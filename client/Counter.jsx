import * as React from "react";

export function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <p>I'm interactive even though the content above me is still loading</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}