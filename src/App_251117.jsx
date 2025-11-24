// import { useState } from 'react'
// import { useEffect } from "react";
import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



function App() {
    const [todos, setTodos] = useState([]);
    const [newText, setNewText] = useState('');

    function addNewText() {
        //trim()

        if (newText.trim() === "") {
            return setNewText("")
        }
        setTodos([...todos, newText]);
        setNewText('')
    }

    //useEffect
    //1. 화면이 컴포넌트가 렌더링될 때 매번 실행
    // useEffect(() => {
    //   console.log('헬로')
    // });


    //2. 리스트 추가될 때만 특정 값이 바뀔 때만 실행
    useEffect(() => {
        console.log('리스트 추가됨');
    }, [todos]); // todos가 변경될 때만 실행


    //3.처음 랜더링되었을 때만 1번만 실행
    useEffect(() => {
        console.log('처음만 실행');
    }, []); // 빈 배열




    return (
        <>

            <div className='app'>
                <h1 className='title'>Todo List</h1>
                <div className='contents'>
                    {/* 인풋추가 영역*/}
                    <div>
                        <h2 className='list-title'>할일 추가</h2>
                        <div className='input-wrap'>
                            <input type="text" placeholder='할일을 입력해주세요' value={newText} onChange={(e) => setNewText(e.target.value)} className='input-add' />
                            <button onClick={addNewText} className='btn'>추가</button>
                        </div>
                    </div>

                    {/* 목록 영역 */}

                    <div >
                        <h2 className='list-title'>할일 목록</h2>
                        {/* <ul>
          <li>목록1</li>
          <li>목록2</li>
          <li>목록3</li>
          <li>목록4</li>
        </ul> 
        <p>아직 할일이 없어요</p>*/}


                        {/* 리스트가 없을 때 '아직 할일이 없어요' 출력  */}
                        {/* 삼항연산자  */}
                        {
                            todos.length > 0 ?
                                <ul className='todo-list'>
                                    {todos.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                :
                                <p className='empty-list'>아직 할일이 없어요</p>
                        }
                    </div>
                </div>


            </div>

        </>
    )
}

export default App
