import styled from "styled-components";

export const Container = styled.div`
  margin: 100px 0 800px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  outline: none;
  border-radius: 4px;
  max-width: 1200px;
  margin: auto;
  height: 1500px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  h2 {
    padding: 0 30px 35px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 110%;
    text-align: center;
    color: #21272a;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 15px;
  position: relative;
  border:${(props) => (props.isUserComment ? "2px solid blue" : "none")}

  &:first-child {
    margin-top: 0; 
  }

  p {
    width: 100%; 
    margin: 0; 
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #21272a;
  }

  input {
    flex: 1; 
    margin-top: 10px; 
    padding: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 26px; 
    line-height: 28px;
    color: #21272a;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; // Change from 'center' to 'space-between'
  align-items: center;
  position: absolute;
  right: 0;
  top: -11px;
  height: 20%;
  padding: 20px;
  border: 1px solid #8bbe8a;
  border-radius: 8px;
  margin: 20px auto;
  background-color: #f6e8d3;

  input {
    margin-right: 10px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #8bbe8a;
    width: 60%;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #8bbe8a;
    color: white;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: #3563e9;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 10px;
  cursor: pointer;
  min-width: 50px;

  &:active {
    position: relative;
    top: 3px;
  }

  &:disabled {
    background: #a6c8ff;
  }
`;

export const RegisterButtonContainer = styled(ButtonContainer)`
  min-width 120px
`;

export const RegisterButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background: #3563e9;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 10px;
  cursor: pointer;
  min-width: 50px;

  &:active {
    position: relative;
    top: 3px;
  }

  &:disabled {
    background: #a6c8ff;
  }
`;

export const EditCompleteButton = styled(Button)`
  min-width: 120px;
`;
