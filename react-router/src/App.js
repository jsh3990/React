import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    /*
    1. 아래 충족하는 코드를 작성하세요.
    요청주소
    https://raw.githubusercontent.com/yopy0817/data_example/refs/heads/master/data.json

    1. 이 페이지가 mount된 이후에 해당 주소로 fetch요청을 보내 데이터를 받아오세요
    2. 받아온 데이터는 state에 저장하세요 
    3. 화면에는 컴포넌트 반복을 통해서 받아온 데이터를 출력해주면 됩니다.
    4. 이 데이터가 도착하기 전까지는 "데이터 로딩중..."이라는 문구가 보이도록 처리하세요
    */

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true); //로딩화면처리


    useEffect ( () => {
        (async () => {
            const result = await fetch("https://raw.githubusercontent.com/yopy0817/data_example/refs/heads/master/data.json")
                                    .then(response => response.json());
            setData(result); //데이터 저장
            setLoading(false); //로딩 false
        })();
    }) ;

    //로딩중일 경웨 처리
    if(isLoading) {
        return <div>데이터를 불러오는 중입니다.</div>
    }

    return (
        <>
            <h3>실습문제</h3>
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        <img src={item.src}/>
                        <div>
                            제목: {item.title} <br/>
                            내용: {item.content}
                        </div>
                    </li>)
                }
            </ul>
        </>
    )
}   
export default App;