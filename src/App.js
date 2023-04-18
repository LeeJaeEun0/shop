import {Button , Nav, Navbar, Container} from 'react-bootstrap';
import './App.css';
import  bg from './img/bg.png'; // import 작명 from '이미지 경로'
import { useState } from 'react';
//import a from './data.js'; // 한개의 변수만 가져온 경우
import {a,b} from './data.js'; // 두개의 변수만 가져온 경우

function App() {
  let [shoes] = useState();
  return (
    <div className="App">
    {a}
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
    {/* 첫번째 상품 */}
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='80%'/>
      {/* <img src="/logo192.png" width='80%'/>
      {/* codingapple.com/어쩌구/에 발행*/}
      {/* <img src="/어쩌구/logo192.png" width='80%'/> => 대신
      <img src={process.env.PUBLIC_URL+ '/logo192.png'} width='80%'/>
      => process.env.PUBLIC_URL는 내 사이트의 현재 경로  */}
      <h4>상품명</h4>
      <p>상품 설명</p>
    </div>
    {/* 두번째 상품 */}
    <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='80%'/>
      <h4>상품명</h4>
      <p>상품 설명</p>
    </div>
    {/* 세번째 상품 */}
    <div className="col-md-4">
    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='80%'/>
      <h4>상품명</h4>
      <p>상품 설명</p>
    </div>
  </div>
</div> 
    </div>
  );
}

export default App;
