import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function Seo (title = 'React 19', description='Hola React 19'){
  return(
    <>
      <title>{title}</title>
      <meta name='description' content={description}/>
    </>
  )
}
// Change the default props , react will ignore this
// Seo.defaultProps ={
//   title:'React 19',
//   description: 'Hola React 19'
// }


function App() {
  // BEFORE

  // const [count, setCount]=useState(19)
  // useEffect( () => {
  //   document.title = `Hola React ${count}`
  // }, [count])
  
  return (
    <>
      {/* NEW*/}
      <Seo title='Hola React 19' description="Hola React 19"/>
      <title>{`Hola React ${React.version}`}</title>
      <meta name='description' content='Hola React 19'/>
      <link rel="icon" type="image/svg+xml" href="./assets/react.svg" />
      <AnotherComponent/>
      <div>    
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3 style={{marginBottom:0}}>Hola React 19</h3>
          <small style={{color: 'yellow', fontSize:'10px'}}>La version es {React.version}</small>
      </div>
        <button onClick={() => setCount(count+1)}>Incrementar</button>
    </>
  )
}
function AnotherComponent(){
  return(<Seo title='Hola React 19' description="Hola React 19"/>)
}

export default App;
