import React, { useState } from "react";
import Trash from './Trash';

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodo = e => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  const pushTodoToArr = e => {
    e.preventDefault();
    setTodoList([...todoList, { id: Date.now(), text: todo }]);
    e.target.reset();
  };

  const removeItem = id => {
    setTodoList(
      todoList.filter(y => {
        return y.id !== id;
      })
    );
  };

  return (
    <div>
        <h1>To Do List</h1>
    <form onSubmit={pushTodoToArr}>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul className="list">
        {todoList.map(x => (
          <li key={x.id}>
            {x.text}
            <a href="#" onClick={() => removeItem(x.id)}>
              <Trash className="Trash" />
            </a>
          </li>
        ))}
      </ul>
    </form>
    </div>
  );
};
export default ToDo;
