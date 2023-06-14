import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 230px;

  p {
    padding: 0 30px 35px;
    width: 2300px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 110%;
    text-align: center;
    color: #21272a;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    width: 1700px;
  }
`;

export const RadioContainer = styled.div`
  align-items: center;
  border-top: 1px solid #00000033;
  padding: 70px 50px 0;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 70px;

    width: 120px;
    height: 50px;

    border: 1px solid #3563e9;
    border-radius: 5px;
    background: #3563e9;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #ffffff;
  }

  div {
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    width: 180px;
    height: 50px;

    border: 1px solid #0073b9;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #0073b9;

    input {
      margin-left: 0;
      margin-right: 15px;
      width: 24px;
      height: 24px;
      accent-color: #0073b9;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;

  div {
    padding: 20px 0 22.5px;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 70px;

      width: 120px;
      height: 50px;

      border: 1px solid #3563e9;
      border-radius: 5px;
      background: #3563e9;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #ffffff;
    }

    input,
    textarea {
      width: 1500px;
      border-radius: 5px;
      padding-left: 15px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      color: #000000;
    }

    textarea {
      height: 700px;
      padding-top: 15px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 50px 70px;
  border-bottom: 1px solid #00000033;

  width: 2316px;

  button {
    width: 150px;
    height: 50px;

    margin-left: 15px;
    border: 1px solid #3563e9;
    border-radius: 5px;
    background: #ffffff;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #3563e9;

    &:hover {
      background: #3563e9;
      color: #ffffff;
    }

    &:active {
      position: relative;
      top: 2px;
    }
  }

  .tolist {
    border: 1px solid #15be51;
    background: #ffffff;
    color: #15be51;

    &:hover {
      background: #15be51;
      color: #ffffff;
    }
  }
`;
