import React from "react";
import styled from "styled-components";
import { PushSpinner } from "react-spinners-kit";

const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`


const Loading = () => {
  return (
    <Container>
      <PushSpinner size={50} color="#3C91E6" loading={true} />
    </Container>
  );
};

export default Loading