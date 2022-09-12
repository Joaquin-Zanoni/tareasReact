import {useState} from 'react' ;
function Sumar(){ 
let[valor,nuevo]= useState(0);
function restar(){
    nuevo(valor => valor-1)
}
function sumar(){
    nuevo(valor => valor+1)
}
    return(
        <div className="contador">
            <button onClick={restar}>restar</button>
            <h3>{valor}</h3>
            <button  onClick={sumar}>sumar</button>
        </div>
    )
}

export default Sumar;