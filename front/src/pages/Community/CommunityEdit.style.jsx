import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 260px;
  border-top-left-radius: 60px;
  border-top-right-radius: 55px;
  border-top: 100px dotted #f9f8f7;

  p {
    display: flex;
    justify-content: flex-start;

    padding: 150px 30px 0 150px;
    width: 2300px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;  
    line-height: 110%;
    text-align: center;
    color: #21272A;
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
    width: 2300px;
    background: #caf5d7;
  }
`;

export const RadioContainer = styled.div`
  align-items: center;
  padding: 50px 0 40px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 50px 0 150px;

    width: 160px;
    height: 60px;

    border: 1px solid #218721;
    border-radius: 5px;
    background: #218721;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #FFFFFF;
  }

  div {
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-right: 20px;

    width: 180px;
    height: 60px;

    border: 3px solid #218721;
    border-radius: 5px;

    background: #f9f8f7;

    font-family: 'Inter';
    font-style: normal; 
    font-weight: 700;
    font-size: 28px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #218721;

    input {
      margin-left: 0;
      margin-right: 15px;
      width: 24px;
      height: 24px;
      accent-color:#218721;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  div {
    padding: 20px 0;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 50px 20px 150px;
  
      width: 160px;
      height: 60px;
  
      border: 1px solid #218721;
      border-radius: 5px;
      background: #218721;
  
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 17px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #FFFFFF;
    }

    input, textarea {
      width: 1800px;
      height: 60px;
      border-radius: 5px;
      padding-left: 15px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 140%;
      color: #000000;
    }

    textarea {
      height: 700px;
      padding-top: 15px;
    }
  }

  input[type="file"] {
    padding-top: 11px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #000000;

    &::file-selector-button {
      margin-right: 20px;
      height: 40px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 0 150px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;

  width: 2316px;

  button {
    width: 160px;
    height: 60px;

    margin-left: 15px;
    border: 1px solid #3563E9;
    border-radius: 5px;
    background: #3563E9;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #FFFFFF;

    &:hover {
      border: 1px solid #1D3B97;
      background: #1D3B97;
      color: #FFFFFF;
    }

    &:active {
      position: relative;
      top: 2px;
    }
  }

  .tolist {
    border: 1px solid #9C0FFC;
    background: #9C0FFC;
    color: #FFFFFF;

    &:hover {
      background: #9C0FFC;
      color: #FFFFFF;
    }
  }

  .save {
    margin-right: 112px;
  }
`;