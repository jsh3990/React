import { useReducer } from "react";
import { myReducer, yourReducer } from "./MyReducer";

//리듀서 함수
// const myReducer = (state, action) => {
//     console.log(state);
//     console.log(action);
//     //action에 따라서 state코드를 변경 처리하는 코드 
//     if( action.type === '증가' ) {
//         state = {count : state.count + 1}
//     } else if( action.type === '감소' ) {
//         state = {count : state.count - 1}
//     } else if( action.type === '초기화' ) {
//         state = {count : 0}
//     }


//     return state; //결과 state를 반환
    
    
    
// }

function HookReducer() {
    
    //리듀서 - 컴포넌트 외부에서 state 관리(재활용 가능)
    //const [현재state, state를 변경하는 함수] = userReducer(리듀서 함수, 초기값);
    const [state, func] = useReducer(myReducer, {count: 0});

    const[data, dispatch] = useReducer(yourReducer, {value: ''});

    return (
        <>
            <button type="button" onClick={ () => func( {type: "증가"} ) }>증가</button>
            <button type="button" onClick={ () => func( {type: "감소"} ) }>감소</button>
            <button type="button" onClick={ () => func( {type: "초기화"} ) }>초기화</button>

            <br/>
            결과: {state.count}

            <h3>실습</h3>
            <input type="text" onChange={ (e) => dispatch({type: "change", payload: e.target.value})} value={data.value}></input>
            <button type="button" onClick={() => dispatch({ type: "clear" })}>인풋 초기화</button>
            <br/>
            현재 state: {data.value}
        </>
    )
}


export default HookReducer;