import logo from './logo.svg';
import './App.css';
import SubmitForm from './Form.js';
import ReactDOM from 'react-dom/client';
import Input from './Input.js';
import {useState} from 'react';

function App() {
  const [input, setInput] = useState("");
  
  return (
    <div className="App">
<div>
  <p>
  <SubmitForm onSubmit = {(x) => {setInput(x)}}></SubmitForm>
  </p>
</div>
      <Input name={input}></Input>
      
    </div>
  );
}

export default App;
