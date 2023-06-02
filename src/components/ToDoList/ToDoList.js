import React from "react";

function ToDoList({ todo, setToDo }) {
    function deleteToDo(id) {
        let newToDo = [...todo].filter(item => item.id !== id)
        setToDo(newToDo)
    }
    function statusToDo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setToDo(newTodo)
    }
    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        <div> {item.title} </div>
                        <button onClick={() => deleteToDo(item.id)}> Удалить </button>
                        <button onClick={() => statusToDo(item.id)}> Закрыть/Открыть </button>
                    </div>
                ))

            }
        </div>
    )
}

export default ToDoList