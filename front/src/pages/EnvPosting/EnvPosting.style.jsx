import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 170px 50px 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;  
  margin: 50px 0 120px;
  border-bottom: 10px dashed #218721;

  p {
    padding: 75px 0 40px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
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
    border-radius: 50px;
    border-top: 52px dotted #4fc174;

    margin: 0 25px 50px;
    padding: 50px 50px 10px;

    width: 24%;

    background: #F9F8F7;
  }

  img {
    cursor: pointer;

    border-radius: 70%;
    border: 5px solid #218721;
    width: 700px;
    height: 700px;
  }

  p {
    width: 700px;
    border-bottom: 5px ridge #218721;

    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 58px;
    letter-spacing: 0.2px;
    text-transform: capitalize;

    color: #000000;
  }
`;