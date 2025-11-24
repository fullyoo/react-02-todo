
import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';
import './App.css'


function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        // setTodos([...todos, newTodo])
        setTodos([
            ...todos,
            {
                // UUID: 겹치지않는 고유한 ID를 만들 때 사용
                // id="a2350ec9-60db-48ed-90a4-a1da50092cf7"
                id: crypto.randomUUID(),
                text: newTodo,
                done: false,
                isEditing: false
            }]);
        // 새항목 추가시 완료 상태는 false(미완료)
    }

    // 수정모드 전환 함수(수정 버튼 클릭 시)
    function toggleEdit(id) {
        const editTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, isEditing: !item.isEditing }
                // 속성만 반대(!느낌표)
            }
            return item;
        })
        setTodos(editTodos)
    }

    // 수정 완료 함수(저장 버튼 클릭 시)
    function updateTodo(id, newText) {
        const updateTodos = todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item, text: newText, isEditing: false
                    // 텍스트를 변경 + isEditing false로 변경
                }
            } return item;
        });

        setTodos(updateTodos);
    }


    // 할일 완료 상태(체크박스 표시)
    function toggleTodo(id) {
        const newTodos = todos.map((item) => {
            if (item.id === id) { //해당 id가 클릭한 인덱스면,
                return { ...item, done: !item.done }
                // 원래내용은 그대로 두고 done 속성만 반대(!느낌표)로 바꿔줌
            }
            return item;
        });

        setTodos(newTodos) //새 배열로 업데이트

    }


    // 할일 삭제 함수
    // function deleteTodo(deleteIndex) {
    //   const newTodos = [...todos] // 기존 배열을 그대로 복사
    //   newTodos.splice(deleteIndex, 1) // 클릭한 deleteIndex 1개 삭제 
    //   setTodos(newTodos) // 새 배열로 상태 업데이트
    // }

    // filter 함수로 변경
    // filter : 배열을 하나씩 훑으면서 조건에 맞는 것만 새 배열로 반환시킴
    function deleteTodo(id) {
        // const newTodos = todos.filter((item, index) => index !== deleteIndex);

        // setTodos(newTodos) 한줄로 쓰면
        // setTodos(todos.filter((item, index) => index !== deleteIndex));
        // _(언더바): 이자리에 값(item)은 있지만, 값(item)은 필요없고 위치 순번(index)만 지정하는 역할. 안쓸거임.


        // 기존
        // setTodos(todos.filter((_, index) => index !== deleteIndex));
        //index -> id로 변경
        setTodos(todos.filter((item) => item.id !== id));


    }

    return (

        <div className='app'>
            <h1 className='title'>Todo List</h1>
            <div className='contents'>

                {/* 인풋 추가 영역  */}
                <TodoInput onAdd={addTodo} />

                {/* 목록 영역  */}
                <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={toggleEdit} onUpdate={updateTodo}

                />
            </div>

        </div>
    )
}

export default App