import { useEffect, useState } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    // 컴포넌트가 마운트될 때 1번 실행
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타났습니다.');
    }, []);

    // count가 변경될 때마다 실행
    useEffect(() => {
        console.log(`count 변경됨: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 20 }}>
            <h2>useEffect 테스트</h2>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
        </div>
    );
}

export default UseEffect;
