import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;  
  margin: 200px 0 40px;

  p {
    padding: 100px 0 95px;
    width: 2922px;
    border-bottom: 10px dashed #218721;

    font-family: 'Roboto';
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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0 500px;

  fieldset {
    padding-top: 50px;
    border: none;

    width: 1200px;
  
    legend {
      padding-bottom: 50px;
      width: 100%;
  
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 110%;
      color: #21272A;
    }
  }
`;

export const FormPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;

  border: 5px dashed #FDB551;
  margin-bottom: 20px;
  padding: 50px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const FormPhotoContent = styled.form`
  display: flex;
  flex-direction: row;
  width: 50%;
  border-right: 1px solid #DDE1E6;
  
  .profilebox {
    margin-right: 35px;    
    width: 250px;
    height: 250px; 
    border-radius: 70%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
    }
  }

  .buttonbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;

    label, button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-bottom: 20px;
      border: 4px solid #218721;
      border-radius: 5px;
      height: 50px;

      text-align: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 100%;
      letter-spacing: 0.5px;
      color: #218721;

      &:hover {
        border: 4px solid #1D5D1D;
        background: #F6F9FF;
        color: #1D5D1D;
      }

      &:active {
        position: relative;
        top: 3px;
      }
    }
    
    .save {
      background: #218721;
      color: #FFFFFF;

      &:hover {
        background: #1D5D1D;
        color: #FFFFFF;
      }
    }
    input { display: none; }
  }

`;

export const FormPhotoInfo = styled.div`
  div {
    display: flex;
    flex-direction: column;
    margin-left: 40px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 140%;
    color: #21272A;

    p {
      margin: 20px 0 10px;
      font-weight: 600;
      font-size: 33px;
    }

    ol {
      margin-top: 20px;
    }
  }
`;

export const FormUserDiv = styled.div`
  border: 5px dashed #FDB551;
  margin-bottom: 20px;
  padding: 60px 50px 40px;

  div {
    display: flex;
    flex-direction: row;
    margin: 10px 0 5px;
  }

  label {
    text-align: right;

    width: 130px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 140%;
    color: #21272A;
  }

  p {
    margin: 0 0 30px 50px;

    width: 300px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 140%;
    color: #21272A;
  }

  input {
    margin-top: 2px;
    padding-left: 10px;
    height: 40px;
    width: 265px;
  }

  button {
    cursor: pointer;

    padding: 0 10px;
    border: none;
    border-radius: 5px;

    height: 48px;
    width: 580px;

    background: #218721;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    color: #FFFFFF;

    &:hover {
      background: #1D5D1D;
      color: #FFFFFF;
    }

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    margin: 42px 30px 0 0;
    
    width: 120px;
    height: 45px;
  
    background: none;
    box-shadow: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.5px;
    color: #FDA62D;
  
    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const EditCompletedText = styled.div`
  width: 1200px;
  border-left: 5px solid #25A249;

  background: #eaf6ed;
  p {
    padding: 0 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.1px;
    color: #21272A;
  }
`;