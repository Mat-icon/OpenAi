import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Options from './components/Options/Options';
import {Details} from './components/Details';
import Image from './components/ImageGen/image';
import { useState } from 'react';
import { OpenAIApi, Configuration } from 'openai';
import Translation from './components/Translation/Translation';

function App() {
const [option, setOption] = useState({});
const [input, setInput] = useState('')

const [result, setResult] = useState('')
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY
    });
    const openai = new OpenAIApi(configuration);


  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff= async ()=> {
    let object = {...option, prompt:input};
    const response = await openai.createCompletion(object);
    console.log(response);
  }
console.log(input);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Options details={Details} selectOption={selectOption} />} />
        <Route path='/image' element={<Image />} />
        <Route path='/q&a' element={<Translation  doStuff={doStuff} setInput={setInput}/>} />
      </Routes>
    </Router>
  );
}

export default App;
