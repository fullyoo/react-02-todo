import { useState } from 'react'

import './App.css'
import TodoList from './TodoList';


function App() {
    const [todos, setTodos] = useState([]);
    const [newText, setNewText] = useState("");


    function addNewText() {
        // trim() 
        if (newText.trim() === "") {
            return setNewText("")
        }
        setTodos([...todos, newText]);
        setNewText("")
    }


    return (

        <div className='app'>
            <h1 className='title'>Todo List</h1>
            <div className='contents'>

                {/* 인풋 추가 영역  */}
                <div>
                    <h2 className='list-title'>할일 추가</h2>
                    <div className='input-wrap'>
                        <input type="text" placeholder='할일을 입력해주세요' value={newText} onChange={(e) => setNewText(e.target.value)} className='input-add' />
                        <button onClick={addNewText} className='btn'>추가</button>
                    </div>
                </div>

                {/* 목록 영역  */}
                <TodoList todos={todos} />


            </div>

        </div>
    )
}

export default App