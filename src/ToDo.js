import React, { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodo = e => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  function pushTodoToArr(e){
    e.preventDefault()
    console.log(todo)
  }

  return (
    <form onSubmit={pushTodoToArr}>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul>
        {/* <li>{[pushTodoToArr]}</li> */}
        {/* <li>{todo}</li> */}
      </ul>
    </form>
  );
};
export default ToDo;
