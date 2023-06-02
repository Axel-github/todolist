import React, { useState } from "react"
// import uuid from 'uuid'

function AddToDo({ todo, setToDo }) {

    const [value, setValue] = useState('')

    function saveToDo() {
        setToDo(
            [...todo, {
                id: 4,
                title: value,
                status: true,
            }]
        )
    }

    return (
        <div>
            <input placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveToDo}>Сохранить</button>
        </div>
    )
}

export default AddToDo