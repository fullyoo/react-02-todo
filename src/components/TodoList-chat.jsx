// components/TodoList.jsx

function TodoList({ todos }) {

    return (
        <div>
            <h2 className="list-title">할일 목록</h2>
            {/* 리스트가 없을 때 '아직 할일이 없어요' 출력  */}

            {todos.length > 0 ? (
                <ul className="todo-list">
                    {todos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className='empty-list'>아직 할일이 없어요</p>
            )}
        </div>
    );
}

export default TodoList;
