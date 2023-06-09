import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 170px 50px 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  margin: 50px 0;

  background: #A6C8FF;

  p {
    padding: 75px 0 90px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 58px;
    text-align: center;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: #212121;
  }
`;

export const PostingContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 25px 50px;
    padding: 0;
    // border: 1px solid grey;

    width: 24%;
  }

  img {
    cursor: pointer;

    border: none;
    width: 700px;
    height: 700px;
  }

  p {
    width: 700px;
    text-align: center;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 58px;
    letter-spacing: 0.2px;
    text-transform: capitalize;

    color: #212121;
  }
`;