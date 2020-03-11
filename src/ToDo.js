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
    setTodoList([...todoList, { text: todo }]);
    // console.log("setTodoList", todoList);
    e.target.reset();
  };

  // const erase = index => {
  //   setTodoList(
  //     todoList.filter(y => {
  //       y.index !== index;
  //     })
  //   );
  //   console.log("set", setTodoList);
  // };

  return (
    <form onSubmit={pushTodoToArr}>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul>
        {todoList.map((x, index) => (
          <li key={index}>
            {x.text}
            // <a onClick={() => erase(x.index)}>x</a>
          </li>
        ))}
      </ul>
    </form>
  );
};
export default ToDo;
