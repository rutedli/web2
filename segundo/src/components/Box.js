import React from 'react';
import './Box.css';

const Box = ({ visible }) => {
  return (
    <div className={`custom-Box ${visible ? 'visible' : 'hidden'}`}>
      Este es el recuadro que se puede ocultar.
    </div>
  );
};

export default Box;