import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fixTodo, finTodo, delTodo } from "../redux/modules/todo";

function Card(props) {
  const dispatch = useDispatch();
  const todo = props.todo;
  const [fix, setFix] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editBody, setEditBody] = useState(todo.body);
  const updates = { editTitle, editBody };

  return (
    <>
      {fix ? (
        <div key={todo.id}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          <button
            onClick={(e) => {
              dispatch(fixTodo(todo, updates));
              setFix((fix) => !fix);
            }}
          >
            수정완료
          </button>
          <button onClick={(e) => setFix((fix) => !fix)}>뒤로가기</button>
        </div>
      ) : (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.body}</div>
          <Link to={`/Detail/${todo.id}`}>Detail..</Link>
          <button onClick={(e) => dispatch(finTodo(todo))}>
            {todo.isDone ? "취소" : "완료"}
          </button>
          <button onClick={(e) => setFix((fix) => !fix)}>수정</button>
          <button onClick={(e) => dispatch(delTodo(todo))}>삭제</button>
        </div>
      )}
    </>
  );
}

export default Card;
