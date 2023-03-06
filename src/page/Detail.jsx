import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
function Detail() {
  const todos = useSelector((state) => state.todos);
  const param = useParams();
  const navigate = useNavigate();
  const detail = todos.find((detail) => detail.id === parseInt(param.id));
  return (
    <div>
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
    </div>
  );
}

export default Detail;
