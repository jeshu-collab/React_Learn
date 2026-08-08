import { useRef, useState, useEffect } from 'react';

export default function UseRef() {
    const [value, setValue] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <>
            <button onClick={() => setValue(prev => prev - 1)}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => setValue(prev => prev + 1)}>+1</button>
            <h1>I've rendered {count.current} times</h1>
        </>
    )
}
