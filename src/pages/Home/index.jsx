import React, {useState, memo} from 'react';
import "./style.scss";
import Card from "../../UI/Card";

const index = () => {
    console.log("render home page" );

    const [num, setNum] = useState(0);

    return (
        <>
            <div className='p-5 mt-5 '>
                <Card /> 
                <h1>{num}</h1>
                <button className="btn btn-success" onClick={()=> setNum(num+1)}>Add</button>
            </div>
        </>
    );
};

export default memo(index);