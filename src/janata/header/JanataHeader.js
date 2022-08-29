import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CategoriesDropDownList from './CategoriesDropDownList';
import {useState, useEffect} from 'react';
import { getCategories } from '../rest-api/GetData';
import TranslatedArticlesDropDownList from './TranslatedArticlesDropDownList'

export default function JanataHeader({config}) {
  const [categoryList,setCategoryList]= useState([{}]);

  useEffect(()=>{
    getCategories().then(data=> setCategoryList(data));
  },[])

  console.log("JanataHeader Rendered...");

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href={config.url}>{config.title}
                <div className='tagline'>
                {config.description}
                </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <CategoriesDropDownList list={categoryList}/>
            </NavDropdown>
            <NavDropdown title="Translated Articles" id="basic-nav-dropdown">
              <TranslatedArticlesDropDownList />
            </NavDropdown>
            <Nav.Link href="#link">Archive</Nav.Link>
            <Nav.Link href="#home">Subscribe</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}