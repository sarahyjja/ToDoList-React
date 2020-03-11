import React, { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState("");

  const handleTodo = e => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  return (
    <form>
      <input placeholder="Type please" onChange={handleTodo}></input>
      <ul>
        <li>buy socks</li>
        <li>buy pen</li>
      </ul>
    </form>
  );
};
export default ToDo;
