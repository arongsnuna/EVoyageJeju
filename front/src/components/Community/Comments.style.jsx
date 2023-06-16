import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  div {
    border-radius: 50px;
    margin: 10px 0;
    background: #FFE69C;
  }
`;

export const InputContainer = styled.div`
  width: 2300px;

  input {
    margin: 20px 0 10px 30px;
    border: none;
    border-radius: 25px;
    padding-left: 40px;

    height: 80px;
    width: 800px;

    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
    color: #21272a;
    letter-spacing: 0.5px;
  }

  button {
    cursor: pointer;
    margin-left: 20px;
    border: none;
    border-radius: 25px;

    width: 180px;
    height: 80px;

    background-color: #8bbe8a;

    font-size: 28px;
    font-weight: 700;
    color: white;

    &:hover {
      background: #719B71;
    }

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  width: 2300px;

  &:last-child {
    margin-bottom: 20px;
  }

  .content-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin-left: 30px;
    border-radius: 30px;

    width: 2230px;
    background: #f9f8f7;

    div {
      display: flex;
      background: #f9f8f7;

      .id {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;

        border-right: 5px solid #218721;
        width: 250px;

        font-size: 28px;
        font-weight: 550;
      }
    }
  }

  input {
    margin-left: 40px;
    border-radius: 50px;
    margin: 13px 0 13px 20px;
    padding: 11px 0 11px 20px;

    width: 1400px;

    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
    color: #21272a;
    letter-spacing: 0.5px;
  }

  p {
    margin-left: 40px;

    font-family: "Inter";
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
    color: #21272a;
    letter-spacing: 0.5px;
  }

  .button-box {
    margin-right: 50px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  paddding-bottom: 30px;

  background-color: #f6e8d3;

  button {
    cursor: pointer;
    margin-left: 20px;
    border: none;
    border-radius: 10px;

    width: 180px;
    height: 60px;

    background-color: #8bbe8a;

    font-size: 28px;
    font-weight: 700;
    color: white;
    
    &:hover {
      background: #719B71;
    }

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;