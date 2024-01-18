import React from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button className="custom-Button" onClick={onClick}>
      "Ocultar Recuadro"
    </button>
  );
};

export default Button;