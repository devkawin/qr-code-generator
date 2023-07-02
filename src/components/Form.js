import React, { useState } from 'react';
import logo from '../images/logo.svg'

export default function Form() {
  const [getQR, setgetQR] = useState({
    data: '',
    color: '',
    bgcolor: '',
    format: '',

  })

  const getValues = (e) => {
    const {name, value} = e.target;
    setgetQR((prev)=>{
      return {...prev, [name]: value}
    })
  }

  const formSubmit = () => {
    const {data, size, color, bgcolor, format} = getQR
    const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&color=${color.slice(1,color.length)}&bgcolor=${bgcolor.slice(1,bgcolor.length)}&margin=1&qzone=1&format=${format}`
    document.getElementById('qrcode').src = qrAPI;
  }

  return ( 
    <div className='form'>
      <ul className="flex-outer">
        <li>
          <label htmlFor="name">Input some text or URL:</label>      
          <input id='name' type='text' className='data' name='data' placeholder='https://google.com/' onChange={getValues} />
        </li>
        <li>
          <label htmlFor="color">Color:</label>
          <input id='color' type='color' className='color' name='color' onChange={getValues} />
        </li>
        <li>
          <label htmlFor="bgcolor">BG Color:</label>
          <input id='bgcolor' type='color' className='bgcolor' name='bgcolor' onChange={getValues} />
        </li>
        <li>
          <label htmlFor="format">Format:</label>
          <select id='format' className='format' name='format' onChange={getValues}>
              <option>Select one</option>
              <option value='png'>PNG</option>
              <option value='jpg'>JPG</option>
              <option value='gif'>GIF</option>
            </select>
        </li>
        <li>
          <button className='btn' onClick={formSubmit}>Generate QR Code</button>
        </li>
        <li>
          <img id='qrcode' src={logo} className='qrcode'/>
        </li>
      </ul>
    </div>
  );
}