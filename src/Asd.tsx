import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Asd = () => {

    const { count } = useSelector((state: any) => state.counter)
    const navigate = useNavigate() 

   

    return (
        <div>
            {count}
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    )
}

export default Asd;