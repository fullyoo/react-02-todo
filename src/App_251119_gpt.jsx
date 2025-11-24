// App.jsx
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    // 할 일 추가
    function addTodo(newTodo) {
        setTodos([
            ...todos,
            { text: newTodo, done: false }   // 객체 형태로 저장
        ]);
    }

    // 할 일 삭제
    function deleteTodo(deleteIndex) {
        const newTodos = [...todos];
        newTodos.splice(deleteIndex, 1);
        setTodos(newTodos);
    }

    // 체크박스 토글
    function toggleTodo(index) {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

    return (
        <div className='app'>
            <h1 className='title'>Todo List</h1>

            <div className='contents'>
                {/* 입력 영역 */}
                <TodoInput onAdd={addTodo} />

                {/* 리스트 출력 */}
                <TodoList
                    todos={todos}
                    onDelete={deleteTodo}
                    onToggle={toggleTodo}
                />
            </div>
        </div>
    );
}

export default App;
