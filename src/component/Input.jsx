import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/modules/todo";
import styled from "styled-components";

const Inputbox = styled.div`
  width: 100%;
  border: 1px solid #9de8ff;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 20px;
  background-color: #9de8ff;
`;

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const newitem = { title, body };

  return (
    <Inputbox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addtodo(newitem));
          setTitle("");
          setBody("");
        }}
      >
        <span>
          제목 :{" "}
          <input
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          내용 :{" "}
          <input
            value={body}
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </span>
        <span>
          <input
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#1256e8",
              marginleft: "20px",
            }}
          />
        </span>
      </form>
    </Inputbox>
  );
}

export default Input;
