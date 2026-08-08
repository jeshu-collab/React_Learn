import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function HandClick() {
        setCount(count => count + 1);
    }
    return (
        <>
            <button onClick={HandClick}>Click me : {count}</button>
        </>
    )
}