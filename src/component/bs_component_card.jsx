import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/css_base.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


//================================================
const CardBS = function ({anime: {id, name, src, info, desc, year, episodes,emision }}) {
 
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} style={{
        height:"180px",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} />
      <Card.Body>
        <Card.Title style={{ height:"60px"}} >
          <div style={{height:"60px", color:"black", overflowX: "hidden", overflowY: "auto", textAlign: "center",}}>{name}</div>
        </Card.Title>
        <Card.Text style={{ minHeight:"100px"}}>
        <div id={'text_card_'+id} style={{color:"black"}} >
          <li>
            <span style={{fontWeight: "bold", color:"black"}}>A&ntilde;o: </span>
            <span style={{color:"black"}}>{year}</span>
          </li>
          <li>
            <span style={{fontWeight: "bold", color:"black"}}>Episodios: </span>
            <span style={{color:"black"}}> {episodes}</span>
          </li>
        </div>  
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
            <span style={{fontWeight: "bold", color:"black"}}>Emision: </span>
            <span style={{color:"black"}}> {emision}</span>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={info} target='_blank'>Info</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}



export  { CardBS };
