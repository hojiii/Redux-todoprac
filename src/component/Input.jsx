import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/modules/todo";

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const newitem = { title, body };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addtodo(newitem));
          setTitle("");
          setBody("");
        }}
      >
        제목 :{" "}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        내용 : <input value={body} onChange={(e) => setBody(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Input;
