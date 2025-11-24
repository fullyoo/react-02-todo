import { useState, useEffect } from 'react';

const Timer = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중 ing...');
        }, 1000);

        // cleanup (컴포넌트 제거 시 실행)
        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        };
    }, []); // 처음 렌더링될 때 1번만 실행

    return (
        <>
            <p>타이머 시작!</p>
        </>
    );
}


function UseEffect() {

    // useEffect 

    // 1. 화면이 랜더링될 때마다 매번 실행됨 
    // useEffect(()=> {
    //   console.log('핼로')
    // });

    // 2. 첫 실행 후 리스트 추가될 때만 실행 
    // useEffect(() => {
    //     console.log('리스트 추가됨')
    // }, [todos]);

    // 3. 첫 랜더링되었을 때만 실행할 때
    useEffect(() => {
        console.log('처음만 실행')
    }, []);


    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {/* showTimer가 true 일 때만 <Timer /> 보여줌 */}
            {showTimer && <Timer />}

            {/* 클릭할 때마다 true/false 토글 */}
            <button onClick={() => setShowTimer(!showTimer)}>
                토글 버튼
            </button>
        </div>
    );
}

export default UseEffect;
