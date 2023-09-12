import {useState} from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);

    return (
        <main>
            <div className="container">
                <h1>counter</h1>
                <span id="value">{count}</span>
                <div className="button-container">
                    <button className="btn decrease" onClick={() => setCount(count-1) }>decrease</button>
                    <button className="btn reset"onClick={() => setCount(0) }>reset</button>
                    <button className="btn increase" onClick={() => setCount(count+1) }>increase</button>
                </div>
            </div>
    </main>
    );
} 

export default Counter;