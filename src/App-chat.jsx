// App.jsx
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';


function App() {
    const [todos, setTodos] = useState([]);

    // Todo 추가 함수
    function addTodo(text) {
        setTodos(prev => [...prev, text]);
    }

    return (
        <div className="app">
            <h1 className="title">Todo List</h1>
            <div className="contents">

                {/* 인풋 추가 영역  */}
                <TodoInput onAdd={addTodo} />
                {/* 목록 영역  */}
                <TodoList todos={todos} />

            </div>
        </div>
    );
}

export default App;
