import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      <h2>Card</h2>
      <p>Input 1: {data.input1}</p>
      <p>Input 2: {data.input2}</p>
    </div>
  );
}

export default Card;
