//import '../assets/css/css_base.css';
import { getElementError } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {col_img} from '../assets/data/db_and_fetch.jsx';

function Footer({ animes, setAnimes, animesFilter, setAnimesFilter }) {

  const alerta = ()=>{
    var nombre = document.getElementById('nombre').value;
    var col_desc = document.getElementById('desc').value;
    var email_aux = document.getElementById('email').value;
    var id_aux = animes.length+1;
    //alert(`nombre ${nombre}, col_desc ${col_desc}, email_aux ${email_aux}, id_aux ${id_aux}`);
    var obj = { 
      id: id_aux, 
      name: nombre, 
      src: col_img, 
      desc:col_desc, 
      email: email_aux 
    }
    
    setAnimes([...animes,obj]);
    setAnimesFilter([...animesFilter,obj]);
  }

  return (
    /*
    <div className="d-flex p-1">
        <Form.Control id='nombre' type="Text" placeholder="Nombre" className="mx-1" />
        <Form.Control id='desc' type="Text" placeholder="Descripcion" className="mx-1"/>
        <Form.Control id='email' type="Text" placeholder="Email" className="mx-1"/>
        <Button variant="primary" size="sm" className="mx-1" onClick={alerta}> Agregar </Button>
    </div>
    */
    <div className="d-flex p-1" style={{textAlign:"center"}}>
        Copyright - GSalguero
    </div>
  );

}







export default Footer;
