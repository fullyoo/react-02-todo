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

    return (
        <div>
            <h2 className='list-title'>할일 추가</h2>
            <div className="input-wrap">
                <input
                    type="text"
                    value={newText}
                    className="input-add"
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
