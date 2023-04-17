import {Button , Nav, Navbar, Container} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Button variant="primary" size="lg">Large button </Button> */}

     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">clock</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    

    </div>
  );
}

export default App;
