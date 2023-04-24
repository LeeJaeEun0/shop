import { Button, Nav, Navbar, Container } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png"; // import 작명 from '이미지 경로'
import { useState } from "react";
//import a from './data.js'; // 한개의 변수만 가져온 경우
//import {a,b} from './data.js'; // 두개의 변수만 가져온 경우
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"; // Router 사용하기 위해서 import
import Detail from "./routes/Detail.js";
import axios from "axios";

function App() {
  let [shoes, shoeschange] = useState(data);
  // 1. 페이지 이동 도와주는 useNavigate()
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* <Button variant="primary" size="lg">Large button </Button> */}

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shoes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              Home
            </Nav.Link>{" "}
            {/*navigate('/')*/}
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Cart
            </Nav.Link>{" "}
            {/* navigate는 입력된 경로로 이동함 */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        {" "}
        {/* 사이트에서 필요한 페이지의 개수만큼 만들기 */}
        <Route
          path="/"
          element={
            <>
              {/* <div className='main-bg'></div> */}
              {/* html에서 이미지 넣을 경우 -> import 필요함 */}
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + bg + ")" }}
              ></div>
              {/* 상품 레이아웃 3개 만들기 */}
              <div className="container">
                <div className="row">
                  {/* <Card shoes={shoes[0]} i={0}></Card>
<Card shoes={shoes[1]} i={1}></Card>
<Card shoes={shoes[2]} i={2}></Card> */}
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1}></Card>;
                  })}
                </div>
                <button
                  onClick={() => {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data]
                        shoeschange(copy)
                      })
                      .catch(() => { // 실패한 경우 보일 것
                        console.log("실패함");
                      });

                    axios.post('/safdfas', {name: 'kim'});
                    
                    // 동시에 ajax 요청 여러개 하면(여러곳에서 get을 하던가)
                    Promise.all(axios.get('/url1'),axios.get('/url2')).then(() =>{
                      // 두개 성공했을 경우 실행할 코드
                    })
                    // array와 object 데이터를 받을 수 있는 이유: json

                  }}
                >
                  버튼
                </button>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는 페이지 404에러</div>} />{" "}
        {/*지정한 페이지 이외의 모든 값을 입력하면 오류 발생 */}
        {/* <Route path='/about' element={<div>어바웃페이지</div>}/> */}
        {/* 여러 페이지에 같은 html 태크를 출력하고 싶은 경우 */}
        {/* <Route path='/about' element={<About/>}/>
        <Route path='/about/member' element={<About/>}/>
        <Route path='/about/location' element={<About/>}/> */}
        {/* tag 안의 태그: nested route */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치 정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생활기념 쿠폰 받기</p>} />
        </Route>
        {/* 페이지를 여러개 만들고 싶으면 :URL 파라미터 만들수 있음 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보명</h4>
      <Outlet></Outlet>
      {/* nested routes의 element 보여주는 곳 */}
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
      {/* nested routes의 element 보여주는 곳 */}
    </div>
  );
}

export default App;
