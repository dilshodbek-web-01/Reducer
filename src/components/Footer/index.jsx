import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <footer className='bg-success text-white text-center p-3'>
            <div className="container">
                <h5>{new Date().getFullYear()}</h5>
            </div>
        </footer>
    );
};

export default index;