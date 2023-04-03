import React from 'react'

export default function Notificats({ text, header }) {
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
