
import { useState } from 'react';
import './App.css';
import Contar from './botones/Contar';

function App() {
  const[mostrar,cambiar]= useState(true)
  function ejercicios(){
    if (mostrar){
      <Contar/>;
      
    }
  }
  
}

export default App;
