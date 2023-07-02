import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer'>
        <small>{props.copy}</small>
    </div>
  );
}