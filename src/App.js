import logo from './sultanabranvector.png';
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
        <div className='banner'>
          <img src={logo} className="header-image" alt="logo" />
        </div>
        <div>
          <div className='validateText'>
            <div className='validateText'>
              <label className='text'>
              Validate your code:
              </label>
            </div>
            <input className='text' type="text" value={code} onChange={(event) => setCode(event.target.value)}></input>
          </div>
          <button className='enter' onClick={redemCode}>ENTER</button>
        </div>
      </div>
      }
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
