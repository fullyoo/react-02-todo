import { useState } from "react";

function TodoList({ todos, onDelete, onToggle, onEdit, onUpdate }) {
    const [filter, setFilter] = useState("전체"); // 전체/미완료/완료 필터 상태
    const [edtText, setEditText] = useState("");  // 수정 모드 입력값 상태

    // --------------------------
    // 필터링 함수
    // --------------------------

    //return: 전체 일때 todos를 반환(return), 나머지조건도 반환하는 형식
    function filterTodos() {
        if (filter === '전체') return todos;             // 전체
        if (filter === '미완료') return todos.filter(todo => !todo.done); // 미완료
        if (filter === '완료') return todos.filter(todo => todo.done);    // 완료
        return todos;
    }

    const todosShow = filterTodos(); // 필터링된 할일 목록

    return (
        <div>
            <h2 className='list-title'>할일 목록</h2>

            {/* --------------------------
                필터 버튼
            -------------------------- */}
            <div className="filter-wrap">
                <button
                    // 조건문, 삼항연산자 형식
                    // {`filter-btn ${{조건문 ? 참일때 : 거짓일때 결과}}`}
                    className={`filter-btn ${filter === '전체' ? 'active' : ''}`}
                    onClick={() => setFilter('전체')}
                >전체</button>

                <button
                    className={`filter-btn ${filter === '미완료' ? 'active' : ''}`}
                    onClick={() => setFilter('미완료')}
                >미완료</button>

                <button
                    className={`filter-btn ${filter === '완료' ? 'active' : ''}`}
                    onClick={() => setFilter('완료')}
                >완료</button>

                {/* <button className="filter-btn" onClick={() => setFilter('완료')}>완료</button> */}
                {/* <button className="filter-btn" onClick={() => setFilter('미완료')}>미완료</button> */}
                {/* <button className="filter-btn" onClick={() => setFilter('완료')}>완료</button> */}

            </div>



            {/* --------------------------
                할일 목록
            -------------------------- */}

            {/* 리스트가 없을 때 '아직 할일이 없어요' 출력 */}
            {todosShow.length > 0 ? (
                <ul className='todo-list'>
                    {todosShow.map((item) => {
                        const edit = item.isEditing; // 수정 모드 여부
                        //이 item이 수정 중 화면인지 출력화면인지 edit에 담아줌.



                        // --------------------------
                        // 수정 모드 화면
                        // --------------------------

                        {/* 수정중 목록 화면 */ }
                        const editView = (
                            <li key={item.id} id={item.id}>
                                {/* 수정 입력창 */}
                                <input
                                    type="text"
                                    value={edtText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />

                                {/* 저장 버튼 */}
                                <button className="save-btn" onClick={() => onUpdate(item.id, edtText)}>저장</button>

                                {/* 취소 버튼: 수정 모드만 해제 */}
                                <button className="cancel-btn" onClick={() => onEdit(item.id)}>취소</button>
                            </li>
                        );



                        // --------------------------
                        // 일반 화면
                        // --------------------------

                        {/* 출력 목록 화면 */ }
                        const normalView = (
                            <li key={item.id} id={item.id}>
                                {/* 완료 체크박스 */}
                                <input
                                    type="checkbox"
                                    checked={item.done}
                                    onChange={() => onToggle(item.id)}
                                />

                                {/* 텍스트 출력 */}
                                {/* {item.text} */}

                                {/* 완료되었을 때 */}
                                {/* <del> {item.text}</del> */}


                                {/* 삼항연산자 형식 {조건문 ? 참일때 : 거짓일때 결과} */}
                                {/* {item.done ? 참 : 거짓} */}
                                {item.done ? <del>{item.text}</del> : <span>{item.text}</span>}

                                {/* 완료 표시 */}
                                {item.done && <p className="done-label">완료됨</p>}

                                {/* 수정 버튼 추가 */}
                                <button className="edit-btn" onClick={() => {
                                    onEdit(item.id);         // 수정 모드 전환(isEditing -> true)
                                    setEditText(item.text);   // 기존 텍스트 입력창에 넣기
                                }}>수정</button>j

                                {/* 삭제 버튼 */}
                                <button className="delete-btn" onClick={() => onDelete(item.id)}>X</button>
                            </li>
                        );

                        // 조건부 렌더링: 수정 모드인지 확인
                        return edit ? editView : normalView;
                    })}
                </ul>
            ) : (
                <p className='empty-list'>아직 할일이 없어요</p>
            )}
        </div>
    );
}

export default TodoList;
