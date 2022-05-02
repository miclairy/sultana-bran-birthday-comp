import './App.css';
import React, { useState } from 'react';

const CODES = [
  'aZbrOyUK',
  'MOERCDm8',
  'si4zwg4L',
  'jPTBNKGw',
  'FsgzkLuc',
  'TkWKJL7V'
]

const PRIZES = [
  'Sultana Bran Socks',
  'a Sultana Bran t-shirt',
  'a free box of Sultana Bran',
]

function App() {

  let [code, setCode] = useState('');
  let [entered, setEntered] = useState(false);

  const redemCode = (_) => {
    setEntered(true);
    console.log('happy birthday', code)
  }

  return (
    <div className="App">
      {entered === false && <div>
        <label>
          Enter your code:
        <input type="text" value={code} onChange={(event) => setCode(event.target.value)}></input>
        </label>
        <button onClick={redemCode}>Enter</button>
      </div>}
      {entered === true && <Prize code={code}/>}
    </div>
  );
}

function Prize(props) {
  const codeNumber = CODES.indexOf(props.code);
  console.log(props['code'], codeNumber)
  let won = codeNumber > -1 && codeNumber < (PRIZES.length - 1);

  return (
    <div>
      {won ? <div>
        <h2>You have won {PRIZES[codeNumber]}</h2>
      </div> : <div>
        <h2>Better luck next time. </h2>
      </div>
      }
    </div>
  )
}


export default App;
