import { useParams } from "react-router-dom";
import styled from "styled-components"; // styled를 사용하기 위한 import

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id; // shoes의 id와 입력받은 id가 같을 경우를 찾음
  });

  console.log(id);

  return (
    <div className="container">
      <div>버튼</div>
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
