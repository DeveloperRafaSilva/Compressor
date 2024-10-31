import React from 'react';
import './Input.css';

const Input = ({ tipo, id, name, label, onevent }) => {
  return (
    <div className="input-item">
      <label htmlFor={id}>{label}</label>
      <input onChange={onevent} type={tipo} id={id} name={name} />
    </div>
  );
};

export default Input;
