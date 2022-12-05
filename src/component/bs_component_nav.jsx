import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {db, buscar_anime_final} from '../assets/data/db_and_fetch.jsx';

//================================================
const NavBS = function ({ animes, setAnimesFilter }) {

  /*
  const alerta = ()=>{
    var search_value = document.getElementById('id_search').value;
    var animesFilter = [...animes];
    const orderedItemNames = animesFilter.filter(col => col.name.includes(search_value)).map(order => order);
    setAnimesFilter(orderedItemNames);
  }
  */

   
  
  async function buscar_anime(){
    var anime = document.getElementById('id_search').value;
    buscar_anime_final(anime, animes, setAnimesFilter);
  }
  


  return (
    <>
    <Navbar id='1' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Anime GS</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/*
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              id = "id_search"
              type="search"
              placeholder="Naruto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={buscar_anime}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export  { NavBS };
