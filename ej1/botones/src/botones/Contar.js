
import { useState } from 'react';

function Contar() {

    const [counter,setCounter]= useState("0-cero");
    function cambiarUno(){
        setCounter(valor=>"1-uno")
    }
    function cambiarDos(){
        setCounter(valor=>"2-dos")
    }
    function cambiarTres(){
        setCounter(valor=>"3-tres")
    }
  return (
        <div className="container">
            <div className="display">{counter}</div>
      <div className="botones"  >
        <button className="uno" onClick={()=>cambiarUno()}>1</button>
      
       <button className="dos" onClick={()=>cambiarDos()}>2</button>
     
      <button className="tres" onClick={()=>cambiarTres()}>3</button>
    </div>
    </div>
  );
}

export default Contar;
