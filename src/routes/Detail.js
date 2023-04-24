import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // styled를 사용하기 위한 import
// css파일이 아니 js파일에서 style를 작성하기 위함
let YellowBtn = styled.button`
  // 하나의 컴포넌트를 작성함
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

// let YellowBtn = styled.button` // 하나의 컴포넌트를 작성함
//   background: yellow;
//   color: black;
//   padding: 10px;
// `

function Detail(props) {

// 동적 UI 만들기 - UI 저장할 State 만들기
let [alerts, setalert] = useState(true) // 변수명 주의 - alert로 사용했더니 alert() 사용할 수 없어서 바꿈

let [count, setCount] = useState(0);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id; // shoes의 id와 입력받은 id가 같을 경우를 찾음
  });
  // Lifecycle에서
  // 컴포넌트에 갈고리 거는법
  useEffect(() => {
    // mount, update시 코드를 실행함
    //  console.log('안녕') 
    //  for(var i =0; i< 10000; i++){
    //   console.log(1);
    // }

    // 타이머 기능
    //setTimeout(()=>{실행할 코드}, 1000)

    let a = setTimeout(() => {setalert(false)}, 2000);

    return() =>{ // useEffect 실행하기전에 사용
      // 기존 타이머를 제거해주세요
      clearTimeout(a) // 타이머 제거해주는 함수
    } 

//  }); // 실행 조건이 없는 경우
} , [count]); // 실행조건을 넣을 수 있음 => count가 변할때마다 실행
// count가 mount, update 될 때마다 실행

let [num, setNum] = useState('')
useEffect(()=>{
  if (isNaN(num) == true){
    alert('그러지마세요')
    }
    }, [num]);
  // for(var i =0; i< 10000; i++){
  //   console.log(1);
  // }


  return (
    <div className="container">
      {
        alerts == true?
        <div className="alerts alerts-waring"
        style={{backgroundColor:"Yellow"}}>2초이내 구매시 할인</div>:
        null
      }
      
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="red">버튼</YellowBtn>
      <YellowBtn bg="yellow">버튼</YellowBtn>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6  mt-4">
          <input onChange={(e) =>{  setNum(e.target.value) }} />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>

        {/* <div className="col-md-6 mt-4">
      <h4 className="pt-5">{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div> */}
      </div>
    </div>
  );
}

export default Detail;
