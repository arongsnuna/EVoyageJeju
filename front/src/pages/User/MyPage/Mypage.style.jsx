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
      padding-bottom: 80px;
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
  border: 1px solid #DDE1E6;
  margin-bottom: 20px;
  padding: 35px 50px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const FormUserDiv = styled.div`
  border: 1px solid #DDE1E6;
  margin-bottom: 20px;
  padding: 35px 50px;

  div {
    display: flex;
    flex-direction: row;
    margin: 0 0 30px;
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
    margin: 42px 0 8px;
    
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