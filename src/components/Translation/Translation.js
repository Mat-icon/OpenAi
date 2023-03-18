import './app.css'
import React from 'react'
import { useState } from 'react';

function Translation({doStuff, setInput}) {
    
  return (
    <div>
        <div className='nav'></div>
        <div className='text-area'>
            <textarea rows={10} cols={80} onChange={(e) => setInput(e.target.value)}></textarea>
            <button className='textarea-btn' onClick={doStuff}>Let's Go!</button>
        </div>
    </div>
  )
}

export default Translation