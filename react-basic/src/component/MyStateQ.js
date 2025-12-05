import { useState } from "react";

function MyStateQ() {

    let [count, setCount] = useState(0);


    return (
        <>
            <h3>카운트: {count}</h3>

            {/* <button type="button" onClick={() => setCount(count + 1)}>증가</button> */}
            {/* setter 메서드의 매개변수로 콜백을 전달하면 콜백의 첫번째 매개변수로 state전달해줌 */}
            <button type="button" onClick={() => setCount( (prev) => { return prev + 1
            } )}>증가</button>
            <button type="button" onClick={() => setCount( (prev) => { return prev - 1
            } )}>감소</button>
            <button type="button" onClick={() => setCount(0)}>초기화</button>
        </>
    )
}

export default MyStateQ;