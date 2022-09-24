import React from "react";
import { useSelector } from "react-redux";

const Asd = () => {

    const { count } = useSelector((state: any) => state.counter)

    return (
        <div>
            {count}
        </div>
    )
}

export default Asd;