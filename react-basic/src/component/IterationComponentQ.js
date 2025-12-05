import { useState } from "react";

function IterationComponentQ() {

    //더미데이터
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    const [mainImg, setMainImg] = useState('/img/img1.png');

    const [list, setList] = useState(arr);

    const handleClick = (src) => {
        // if(e.target.tagName !== 'IMG') return;
        setMainImg(src);
    };

    const newList = list.map ( (item, index) => 
        <div key={index} onClick={ () => handleClick(item.src) }>
            <img src={item.src} alt={item.title}/>
            <p>{item.title}</p>
            <p>{item.price}만원</p>
        </div>
    )
    
    

    return (
        <>
            {/* public 폴더 아래 값은 정적 리소스 형태로 경로 참조가 가능 */}
            <img src={mainImg} alt="이미지" />
            <br/>
            <div style = {{display: 'flex', gap: '10px'}}>
                {newList}
            </div>
        </>
    )
}
export default IterationComponentQ;