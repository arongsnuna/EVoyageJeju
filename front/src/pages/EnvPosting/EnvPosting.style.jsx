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

  p {
    padding: 80px 0 95px;
    width: 2922px;
    border-bottom: 10px dashed #218721;

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
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 2600px;
  }

  .thumbnail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50px;
    border-top: 52px dotted #f9f8f7;

    margin: 0 25px 50px;
    padding: 50px 50px 10px;

    width: 700px;

    background: #caf5d7;
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