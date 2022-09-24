import React, { useState } from "react";
import { counterSlice } from "./redux/counter";

const Counter = () => {

    const [data, setData] = useState();

    function increment(){
        return counterSlice.actions.increment()
    }

    return (
        <div>
        </div>
    )
}

export default Counter;