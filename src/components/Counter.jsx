import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';

function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <MyButton onClick={increment}>+</MyButton>
            <MyButton onClick={decrement}>-</MyButton>
        </div>
    )
}

export default Counter;