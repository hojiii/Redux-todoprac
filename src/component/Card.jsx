import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fixTodo, finTodo, delTodo } from "../redux/modules/todo";
import styled from "styled-components";

const Stbox = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid red;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: pink;
  border-radius: 10px;
`;

const Cardbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: left;
`;

function Card(props) {
  const dispatch = useDispatch();
  const todo = props.todo;
  const [fix, setFix] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editBody, setEditBody] = useState(todo.body);
  const updates = { editTitle, editBody };

  return (
    <Stbox>
      {fix ? (
        <Cardbox key={todo.id}>
          <div>
            <label>제목: </label>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <br />
            <label>내용: </label>
            <input
              type="text"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#f08f9f",
                borderRadius: "5px",
                marginRight: "5px",
                color: "white",
              }}
              onClick={(e) => {
                dispatch(fixTodo(todo, updates));
                setFix((fix) => !fix);
              }}
            >
              수정완료
            </button>
            <button
              style={{
                backgroundColor: "#f08f9f",
                borderRadius: "5px",
                marginRight: "5px",
                color: "white",
              }}
              onClick={(e) => setFix((fix) => !fix)}
            >
              뒤로가기
            </button>
          </div>
        </Cardbox>
      ) : (
        <Cardbox key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.body}</div>
          <Link to={`/Detail/${todo.id}`}>Detail..</Link>
          <div>
            <button
              style={{
                backgroundColor: "#f08f9f",
                borderRadius: "5px",
                marginRight: "5px",
                color: "white",
              }}
              onClick={(e) => dispatch(finTodo(todo))}
            >
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button
              style={{
                backgroundColor: "#f08f9f",
                borderRadius: "5px",
                marginRight: "5px",
                color: "white",
              }}
              onClick={(e) => setFix((fix) => !fix)}
            >
              수정
            </button>
            <button
              style={{
                backgroundColor: "#f08f9f",
                borderRadius: "5px",
                marginRight: "5px",
                color: "white",
              }}
              onClick={(e) => dispatch(delTodo(todo))}
            >
              {" "}
              삭제
            </button>
          </div>
        </Cardbox>
      )}
    </Stbox>
  );
}

export default Card;
