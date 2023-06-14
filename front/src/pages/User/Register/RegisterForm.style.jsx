import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 200px 0 100px;

  img {
    width: 83px;
    height: 83px;
  }

  a {
    margin-right: 25px;
    padding-left: 20px;

    text-decoration: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 48px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    color: #000000;

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 300px;

  legend {
    justify-content: flex-start;
    padding-bottom: 35px;

    width: 600px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    color: #21272A;
  }
`;

export const FormFieldset = styled.fieldset`
  padding: 18px 0;
  border: none;

  width: 600px;

  label {
    padding-left: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    color: #21272A;
  }

  input {
    margin: 8px 0;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid #C1C7CD;

    height: 48px;
    width: 580px;

    background: #F2F4F8;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    line-height: 140%;
    color: #21272A;
  }

  p {
    margin: 0;
    color: #FD0918;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid #DDE1E6;

  width: 600px;
`;

export const FormButton = styled.button`
  cursor: pointer;

  margin: 8px 0;
  padding: 0 10px;
  border: 2px solid #0F62FE;
  
  width: 100%;
  height: 45px;

  background: ${(props) => props.backgroundColor};
  box-shadow: 1px 3px 2px #7F848D;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: ${(props) => props.fontColor};

  &:disabled {
    border: 2px solid #4173CF;
    background: #5A7FC5 ;
    box-shadow: none;
  }

  &:active {
    position: relative;
    top: 2px;
    box-shadow: none;
  }
`;

export const AlreadySignUpText = styled.div`
  justify-content: flex-start;
  width: 600px;
  margin-top: 48px;
  padding-left: 5px;

  a {
    text-decoration: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.1px;
    color: #001D6C;

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;