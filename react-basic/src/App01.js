import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';

function App() {

  const name = "홍길동";
  let age = 20;

  // const myStyle = { 
  //   color: "red",
  //   fontSize: 15,
  //   backgroundColor: "blue"
  // }
  
  return (
    <Fragment>
      <ul>
        <li>1. jsx의 주석은 alt + shift + a {/* */} </li>
        <li>2. jsx는 반드시 하나의 태그를 return 해줘야 함</li>
        <li>3. div 태그를 쓰고 싶지 않으면 Fragment 컴포넌트를 사용하면 된다</li>
        <li>4. 함수 안에서 만들어진 변수는 {name}참조가 가능하다</li>
        <li>5. if문 대신에 3항연산자를 이용한다</li>
        <li>6. 화면에 보여주고 싶은게 없다면 null을 이용하면 된다</li>
        <li>7. undefined을 반환하는 상황을 피하는게 좋습니다</li>
        <li>8. class 속성 대신에 className으로 사용한다</li>
        <li>9. DOM요소에 css style을 넣을 때는 객체형으로 묶고 속성은 카멜표기법을 사용한다(단위 생략시 px)</li>
        <li>10. 홀로 사용되는 태그는 반드시 닫는 태그를 작성해야 된다 {/* <input>에러 */}</li>
      </ul>

    <div className="my-app" style={{color: "red", fontSize: 15, backgroundColor: "blue"}}>
      {age >= 20 ? <b>'성인입니다</b> : <i>'미성년자입니다'</i>}
      {name === '이순신' ? '이순신입니다' : null}
      <img src={logo} width="100" height="100" />
    </div>
    
    </Fragment>
  );
}

export default App;
