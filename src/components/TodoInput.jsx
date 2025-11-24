
// components/TodoInput.jsx
import { useState } from 'react';

function TodoInput({ onAdd }) {
    const [newText, setNewText] = useState("");

    function addNewText() {
        // trim() 
        if (newText.trim() === "")
            return;
        onAdd(newText);
        setNewText("");
    }

    // 키보드 이벤트
    // keyPress, keyDown, ketUp

    // enter 키 처리 이벤트 함수
    function keyDown(e) {
        if (e.key === 'Enter') {
            addNewText()
            // 이벤트 키(e.key)가 Enter를 치면 addNewText 함수 호출.
        }
    }


    return (
        <div>
            <h2 className='list-title'>할일 추가</h2>
            <div className="input-wrap">
                <input
                    type="text"
                    value={newText}
                    className="input-add"
                    onKeyDown={keyDown}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="할 일을 입력하세요"
                />
                <button className="btn" onClick={addNewText}>
                    추가
                </button>
            </div>
        </div>

    );
}

export default TodoInput;
