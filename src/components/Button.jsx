import React from 'react';
import './Button.css';


//if it is not a number we return true
const isOperator = val => {
  return !isNaN(val) || val === "." || val === "±" || val === "%";
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);