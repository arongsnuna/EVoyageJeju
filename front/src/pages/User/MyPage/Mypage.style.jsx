import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 230px;

  p {
    padding: 0 30px 35px;
    border-bottom: 1px solid #DDE1E6;
    width: 1400px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    color: #000000;
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

  border: 1px solid #DDE1E6;
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
      // position: absolute;
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
      border: 1px solid #3563e9;
      border-radius: 5px;
      height: 50px;

      text-align: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 100%;
      letter-spacing: 0.5px;
      color: #3563e9;

      &:hover {
        background: #F6F9FF;
        color: #3563e9;
      }

      &:active {
        position: relative;
        top: 3px;
      }
    }
    
    .save {
      background: #3563e9;
      color: #FFFFFF;

      &:hover {
        background: #2D50B9;
        color: #FFFFFF;
      }
    }
    input { display: none; }
  }

`;

export const FormPhotoInfo = styled.div`
  // display: flex;

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
  border: 1px solid #DDE1E6;
  margin-bottom: 20px;
  padding: 60px 50px;

  div {
    display: flex;
    flex-direction: row;
    margin: 0 0 10px;
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

  button {
    cursor: pointer;

    padding: 0 10px;
    border: none;

    height: 48px;
    width: 580px;

    background: #3563e9;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    line-height: 140%;
    color: #FFFFFF;
    box-shadow: 1px 3px 2px #7F848D;

    :active {
      position: relative;
      top: 3px;

      box-shadow: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    margin: 42px 30px 8px 0;
    
    width: 120px;
    height: 45px;
  
    background: none;
    box-shadow: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.5px;
    color: #3563e9;
  
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