import React from 'react';
import './style.scss';

export default function OneNews({ text, header }) {
  return (
    <div className='contOneNews'>
      <h4 className='headerOneNews'>
        {header}
      </h4>
      <p className='textOneNews'>
        {text}
      </p>
      <hr 
        className='lineOneNews'
      />
    </div>
  )
}
