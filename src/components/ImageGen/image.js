import React from 'react'
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import './image.css'

function Image() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('')
    const configuration = new Configuration({ apiKey: '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' });
    const openai = new OpenAIApi(configuration);
  
    const generateImage = async () => {
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '1024x1024'
      });
      setResult(res.data.data[0].url);
    };
  
  return (
    <div>
         <div className='app-header'>
        <h2>Generate An Image</h2>
        <div className='input-flex'>
        <input
          placeholder='Type a Text to Generate'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={generateImage}>Generate</button>
        </div>
        
      <img src={result} alt='' className='image'/>
      </div> 
    </div>
  )
}

export default Image