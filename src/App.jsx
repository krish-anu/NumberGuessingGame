import { useState } from 'react'
import './App.css'
import Result from './result';

function App() {
  const randomNumber=Math.floor(Math.random()*10)+1
  const [term, setTerm] = useState("");
  function handleChange(event) {
    setTerm(event.target.value);
  }
  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 to 10 (answer) :{ randomNumber}</label>
      </div>
      <input type="text" id="term" name="term" onChange={handleChange} />
      <Result randomNumber={randomNumber} term={term} />
    </div>
  );
}

export default App
