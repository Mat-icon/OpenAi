import React from 'react'
import { Link } from 'react-router-dom';
import './Options.css'

function Options({details, selectOption}) {
  return (
    <div className='options-body'>
        <div className='header'>
            <h1>Get Started</h1>
            <h3>The Future is here!!!</h3>
        </div>
        <div className='search'>
            <input placeholder='search...' type='text'/>
        </div>
        <div className='grid'>
          {details.map((item)=> {
            return (
              <div key={item.id}  onClick= {() => selectOption(item.option)}>
                <Link to={item.path}>
           <div className='options'>
          <div className='logo' style={{background:item.color}}></div>
          <div className='logo-details'>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          </div> 
          </div></Link>
          </div>
          );
       
          })}
       
        </div>
    </div>
  )
}

export default Options