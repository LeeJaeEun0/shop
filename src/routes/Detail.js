import { useParams } from "react-router-dom";
import styled from "styled-components"; // styled를 사용하기 위한 import
// css파일이 아니 js파일에서 style를 작성하기 위함
let YellowBtn = styled.button` // 하나의 컴포넌트를 작성함
  background: ${props => props.bg};
  color: black;
  padding: 10px;
`
// let YellowBtn = styled.button` // 하나의 컴포넌트를 작성함
//   background: yellow;
//   color: black;
//   padding: 10px;
// `

// 옛날 방식
// class Detail2 extends React.Component{ 
//   // 컴포넌의 lifecycle에서 중간중간 실행하기 위해서 컴포넌트에 갈고리 다는 법
//   componentDidMount(){ // 컴포넌트 mount시 여기 코드가 실행 됨

//   }
//   componentDidUpdate(){ // 컴포넌트 update시 여기 코드가 실행 됨

//   }
//   componentWillUnmount(){ // 컴포넌트 unmount시 여기 코드가 실행 됨

//   }
// }

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id; // shoes의 id와 입력받은 id가 같을 경우를 찾음
  });

  return (
    <div className="container">
      <YellowBtn bg='blue'>버튼</YellowBtn>
      <YellowBtn bg='red'>버튼</YellowBtn>
      <YellowBtn bg='yellow'>버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6  mt-4">
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
