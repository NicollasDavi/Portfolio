import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Navbar.module.css"

const name = "<Nicollas />"

function Header (){
    return(
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.nav}>
        <div className="container">
        <Navbar.Brand href="#home">{name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-100px justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Sobre</Nav.Link>
          <Nav.Link href="#projects">Projetos</Nav.Link>
          <Nav.Link href="#contact">Contato</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
        </div>
    </Navbar>
    )
}

export default Header