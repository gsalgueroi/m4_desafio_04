import { useState } from 'react';
import '../assets/css/css_base.css';
import Badge from 'react-bootstrap/Badge';



function CountClicks() {
  const [contador,setContador]  = useState(0);
  const [msg,setMsg]            = useState('Hola');

  const log_count = ()=>{
    setContador(contador+1);
    console.log('Button Clicked('+msg+')'+contador);
  }

  return (
   <>
      <button onClick={log_count} >Count</button>
   </>
  );
}

export default CountClicks;
