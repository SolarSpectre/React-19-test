import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount]=useState(19)
  useEffect( () => {
    document.title = `Hola React ${count}`
  }, [count])

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3 style={{marginBottom:0}}>Hola React 19</h3>
          <small style={{color: 'yellow', fontSize:'10px'}}>La version es {React.version}</small>
      </div>
        <button onClick={() => setCount(count+1)}>Incrementar</button>
    </>
  )
}

export default App;
