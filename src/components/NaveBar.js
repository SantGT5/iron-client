import "./App.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NaveBar() {

  
    return (

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand href="/">Iron Beer</Navbar.Brand>
  <div className="d-flex justify-content-end ">
    <Navbar.Brand href="/"  >  <i className="fas fa-shopping-cart"></i></Navbar.Brand>
  
   
    <NavDropdown align="end"  title={<i className="fas fa-bars" ></i>} id="navbarScrollingDropdown">
        <NavDropdown.Item href="/login">Entrar</NavDropdown.Item>
        <NavDropdown.Item href="/signup">Cadastre-se</NavDropdown.Item>
        <NavDropdown.Item href="/profile">Minha Conta</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>

</div>
</Container>
</Navbar>
)}

export default NaveBar;



