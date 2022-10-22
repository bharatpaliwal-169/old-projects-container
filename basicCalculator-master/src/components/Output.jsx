import React from 'react';
import './main.css';
const Output = ({output}) => {
    return (
        <>
            <div className='result'>
                <p> {output} </p>
            </div>
        </>
    );
}