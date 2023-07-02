import React from 'react';

export default function Header(props) {
  return (
    <div className='header'>
        <h1 className='header'>{props.title}</h1>
    </div>
  );
}