import React, { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodo = e => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  function pushTodoToArr(e) {
    e.preventDefault();
    setTodoList([...todoList, { text: todo }]);
    console.log("setTodoList", todoList);
  }

  return (
    <form onSubmit={pushTodoToArr}>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul>
        {todoList.map(x => (
          <li>{x.text}</li>
        ))}
      </ul>
    </form>
  );
};
export default ToDo;
