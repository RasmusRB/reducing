import React from "react";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import { Link } from "react-router-dom";

const Counting = () => {

    const { count } = useSelector((state: any) => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(33))}>increment by 33</button>
            <Counter />
            <Link to="/asd">asdasd</Link>
        </div>
    )
}

export default Counting;