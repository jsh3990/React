import { useEffect, useState } from "react";

function HookEffect() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    //mount된 이후에 실행됨
    // useEffect( () => {
    //     console.log(`렌더링 완료: ${name}, ${age}`)
    // });

    //첫 번째 mount 이후 딱 한 번 실행하려면, 두 번째 매개변수에 []을 넣어주면 된다
    //ex) 서버에서 데이터를 불러올때 1번
    // useEffect( () => {
    //     console.log(`렌더링 완료: ${name}, ${age}`)
    // }, []);

    //특정 state가 변경될 때마다 실행시키고 싶으면 [state, state...]을 넣으면 된다
    // useEffect( () => {
    //     console.log(`렌더링 완료: ${name}, ${age}`)
    // }, [name]);


    //unmount되기 이전에 실행시킬 구문이 있으면 return 함수에 걸어준다
    useEffect( () => {
        console.log(`렌더링 완료: ${name}, ${age}`)

        return () => {
            console.log("unmount에 실행됨");
            console.log(`소멸되기 직전 name값: ${name}`); //이전 state값을 의미하게 된다
        }

    }, [name]);

    //useEffect는 여러개 선언될 수 있다.
    useEffect( () => {
        console.log("두번째 effect")
    });


    console.log(1);
    
    
    return (
        <>
            <input type="text" onChange={ (e) => setName(e.target.value)} value={name} /><br/>       
            <input type="text" onChange={ (e) => setAge(e.target.value)} value={age} /><br/>       
        </>
    )
}
export default HookEffect;