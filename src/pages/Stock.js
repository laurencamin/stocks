//import React from 'react';
import {useParams} from 'react-router-dom';


function Stock () {
    const { symbol } = useParams();
    const  { lastPrice }  = useParams();
    return (
         <div>
            <h1>Stock</h1>
            <p> {symbol} </p>
            <h1>Price</h1>
            <p> {lastPrice} </p>
         </div>
    );
  };
export default Stock;