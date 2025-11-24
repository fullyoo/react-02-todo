import { useState } from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';
import './App.css'


function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        setTodos([
            ...todos,
            {
                // UUID 겹치지 않는 고유한  ID를 만들 때 사용. 
                id: crypto.randomUUID(), //'36b8f84d-df4e-4d49-b662-bcde71a8764f'
                text: newTodo,
                done: false,
                isEditing: false
            }
        ]);
        // 새 항목 추가 시 완료상태는 false(미완료) 
    }

    // 수정모드 전환 함수 (수정 버튼 클릭 시)
    function toggleEdit(id) {
        const editTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, isEditing: !item.isEditing }
            }
            return item;
        });
        setTodos(editTodos)
    }

    // 수정 완료 함수 (저장 버튼 클릭 시)
    function updateTodo(id, newText) {
        const updateTodos = todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    text: newText,
                    isEditing: false
                    //텍스트를 변경 + isEditing false로 변경
                }
            }
            return item;
        })
        setTodos(updateTodos)
    }



    // 할일 완료 상태 이벤트 (체크박스)
    function toggleTodo(id) {
        const newTodos = todos.map((item) => {
            if (item.id === id) { //해당 id 내가 클릭한 id면
                return { ...item, done: !item.done } //원래 내용은 그대로 두고 done 속성만 반대로 바꿔줌
            }
            return item;
        });

        setTodos(newTodos) //새 배열로 상태 업데이트
    }


    // 할일 삭제 함수 
    // function deleteTodo(deleteIndex) {

    //   const newTodos = [...todos] //기존 배열을 그대로 복사
    //   newTodos.splice(deleteIndex, 1) //클릭한 deleteIndex 1개 삭제
    //   setTodos(newTodos) //새 배열로 상태 업데이트
    // }

    // filter 함수로 변경 
    // filter: 배열을 하나씩 훑으면서 조건에 맞는 것만 새 배열로 반환 
    function deleteTodo(id) {
        // const newTodos = todos.filter((item, index) => index !== deleteIndex);
        // setTodos(newTodos)

        // 한줄로 쓰면 
        // setTodos(todos.filter((item, index) => index !== deleteIndex));


        // setTodos(todos.filter((_, index) => index !== deleteIndex));
        // 이 자리에 값(item)이 있지만, 우린 안쓸거에요~
        // 즉 값(item)은 필요없고 위치(index)만 필요할 때 

        // index -> id 로 변경 하면 
        setTodos(todos.filter((item) => item.id !== id));
    }



    return (

        <div className='app'>
            <h1 className='title'>Todo List</h1>
            <div className='contents'>

                {/* 인풋 추가 영역  */}
                <TodoInput onAdd={addTodo} />

                {/* 목록 영역  */}
                <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} onEdit={toggleEdit} onUpdate={updateTodo} />
            </div>

        </div>
    )
}

export default App


// 현재 todos 상태는
// ['자바스크립트 공부', '디자인 작업', '포폴 작업']

// [
//   {
//     text: '자바스크립트 공부',
//     done: true / false
//   }

// ]

// text:  할일 내용, done: 완료 여부 