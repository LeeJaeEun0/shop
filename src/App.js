import {Button , Nav, Navbar, Container} from 'react-bootstrap';
import './App.css';
import  bg from './img/bg.png'; // import 작명 from '이미지 경로'
import { useState } from 'react';
//import a from './data.js'; // 한개의 변수만 가져온 경우
//import {a,b} from './data.js'; // 두개의 변수만 가져온 경우
import data from './data.js';
function App() {
  let [shoes] = useState(data);

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

    {/* <div className='main-bg'></div> */}
    {/* html에서 이미지 넣을 경우 -> import 필요함 */}
    <div className='main-bg' style={{backgroundImage : 'url('+bg+')'}}></div>

    {/* 상품 레이아웃 3개 만들기 */}
    <div className="container">
  <div className="row">
    {/* <Card shoes={shoes[0]} i={0}></Card>
    <Card shoes={shoes[1]} i={1}></Card>
    <Card shoes={shoes[2]} i={2}></Card> */}
  {
    shoes.map((a, i) =>{
      return(
      <Card shoes={shoes[i]} i={i+1}></Card>
        )
        })
  }
        </div>

        </div> 
    </div>
  );
}

function Card(props){
  return(
  <div className="col-md-4">
  <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width='80%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
  
}

export default App;
