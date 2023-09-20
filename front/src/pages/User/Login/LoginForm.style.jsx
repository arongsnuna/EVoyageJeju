import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -200px;
  padding-bottom: 1px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 200px 0 100px;
  padding-top: 250px;

  img {
    width: 95px;
    height: 95px;
  }

  a {
    padding-left: 40px;

    text-decoration: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
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
    padding-bottom: 42px;

    width: 720px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
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
    font-size: 30px;
    line-height: 140%;
    color: #21272A;
  }

  input {
    margin: 8px 0;
    padding: 0 10px;

    border: 2px solid #FDA62D;
    border-radius: 5px;

    height: 60px;
    width: 680px;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 25px;
    line-height: 140%;
    color: #21272A;
  }

  p {
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 25px;
    line-height: 140%;
    color: #FD0918;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid #DDE1E6;

  width: 700px;
`;

export const FormButton = styled.button`
  cursor: pointer;

  margin: 8px 0;
  padding: 0 10px;
  border: 2px solid #218721;
  border-radius: 5px;
  
  width: 100%;
  height: 60px;

  background: #218721;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: #FFFFFF;

  &:disabled {
    border: 2px solid #1D5D1D;
    background: #1D5D1D ;
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
  margin: 30px 100px 0 10px; 

  a {
    display: flex;
    flex-direction: row;

    margin-bottom: 15px;
    text-decoration: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 140%;
    letter-spacing: 0.1px;
    color: #001D6C;

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;