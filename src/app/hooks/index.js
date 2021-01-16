import React, { useState } from 'react';

export function HooksExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button className="btn btn-danger" onClick={() => setCount(count + 1)}>按钮</button>
        </div>
    )
}