import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';


function App() {
const [prompt, setPrompt] = useState('');


const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEYS,
});
const openai = new OpenAIApi(configuration);

const generateImage = async () =>{
 const res = await openai.createImage({
  prompt: prompt,
  n : 1,
  size: '1024x1024'
});

console.log(res.data.data[0].url)
};
  return (
    <div className="App">
      <div className='app-header'>
        <h2>Generate An Image</h2>
        <input  placeholder ='Type a Text to Generate'
        onChange={(e) => setPrompt(e.target.value)}/>
        <button onClick={generateImage}>Generate</button>
      </div>
    </div>
  );
}

export default App;
