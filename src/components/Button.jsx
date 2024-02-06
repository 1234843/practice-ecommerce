import React, { useState, useEffect } from 'react';
import  '../components/Button.css'

// const Button = ({  }) => {
//     const [, set] = useState();
//     useEffect(() => {
//         set();
//     }, []);

//     return (
//         <>
//             <button className="button">Click me</button>
//         </>
//     );
// };

function Button() {
    // Define state variable 'count' and 'setCount' function to update it
    const [count, setCount] = useState(0);

    function HandleCountIncrement(){
        setCount(count + 1)
    }
    function HandleCountDecrement(){
        setCount(count - 1)
    }

    useEffect(() => {
        setCount(5)
    }, []);

    return (
      <div>
        <h2>Counter: {count}</h2>
        {/* Button to increment count */}
        <button className="button" onClick={HandleCountIncrement}>Increment</button>
        {/* Button to decrement count */}
        <button className="button" onClick={HandleCountDecrement}>Decrement</button>
      </div>
    );
  }

export default Button;
