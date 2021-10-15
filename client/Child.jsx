import * as React from "react";

export function Child() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}

export default Child;