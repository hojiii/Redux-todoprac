import React from "react";
import Input from "../component/Input";
import Card from "../component/Card";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Headerbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Mainbox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function Home() {
  const todos = useSelector((state) => state.todos);
  return (
    <Mainbox>
      <Headerbox>
        <header>My Todo List</header>
        <div>hojii</div>
      </Headerbox>
      <Input />
      <h1>Working</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((item) => {
          return item.isDone === false ? (
            <Card key={item.id} todo={item} />
          ) : null;
        })}
      </div>

      <h1>Done</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((item) => {
          return item.isDone === true ? (
            <Card key={item.id} todo={item} />
          ) : null;
        })}
      </div>
    </Mainbox>
  );
}

export default Home;
