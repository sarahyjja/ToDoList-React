import React, { useState } from "react";

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
    <form onSubmit={pushTodoToArr}>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul>
        {todoList.map(x => (
          <li key={x.id}>
            {x.text}
            <a href="#" onClick={() => removeItem(x.id)}>
              X
            </a>
          </li>
        ))}
      </ul>
    </form>
  );
};
export default ToDo;
