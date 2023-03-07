import React from "react";
import Input from "../component/Input";
import styled from "styled-components";
import List from "../component/List";

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

const Layout = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <Layout>
      <Mainbox>
        <Headerbox>
          <header>My Todo List</header>
          <div>hojii</div>
        </Headerbox>
        <Input />
        <List isDone={false} />
        <List isDone={true} />
      </Mainbox>
    </Layout>
  );
}

export default Home;
