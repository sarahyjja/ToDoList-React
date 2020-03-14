import React, { useState } from "react";
import trash from "./trash";

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
      <h1 className="title">TO DO LIST</h1>
      <form className='form' onSubmit={pushTodoToArr}>
        <input className='input' placeholder="What to do?" onChange={handleTodo}></input>
        <ul className="list">
          {todoList.map(x => (
            <li className='items' key={x.id}>
              {x.text}
              <a href="#" onClick={() => removeItem(x.id)}>
                <svg className="trash"></svg>{" "}
              </a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
export default ToDo;
