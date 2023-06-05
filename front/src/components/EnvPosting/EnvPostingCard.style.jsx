import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 160px;

  width: 100%;
  height: 1300px;

  opacity: 0.8;
  background-color: black;
`;

export const PostingContainer = styled.div`
  padding: 200px;
  margint: 100px;
  border: 5px solid grey;

  width: 60%;
  height: 600px;

  background: white;

  p {
    font-size: 100px;
  }
`;