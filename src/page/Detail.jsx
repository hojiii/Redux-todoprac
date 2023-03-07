import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detailbox = styled.div`
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

function Detail() {
  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const navigate = useNavigate();
  const detail = todos.find((detail) => detail.id === parseInt(param.id));
  return (
    <Detailbox>
      <Cardbox>
        <div>{detail.id}</div>
        <div>{detail.title}</div>
        <div>{detail.body}</div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </button>
      </Cardbox>
    </Detailbox>
  );
}

export default Detail;
