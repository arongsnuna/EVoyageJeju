import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  div {
    padding: none;
  }

  input {
    margin: 0 30px;

    width: 100%;
    height: 63%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 140%;
    color: #21272A;
  }
`;

export const ButtonContainer = styled.div`
  width: 580px;
  padding: 0 0 0 10px;

  button {
    margin-right: 9px;
    padding-right: 10px;
    // width: 350px;

    &:disabled {
      border: 2px solid #4173CF;
      background: #5A7FC5 ;
      box-shadow: none;
    }
  }
`