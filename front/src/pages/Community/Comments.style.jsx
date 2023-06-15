import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 800px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  outline: none; // Remove the outline
  border-radius: 4px; // optional: if you want the outline to have rounded corners
  max-width: 1200px; // adjust to the desired maximum width
  margin: auto; // centers the container
  overflow-y: scroll; // enable vertical scrolling
  height: 1500px; // adjust to the desired height

  /* Add infinite scrolling behavior */
  &::-webkit-scrollbar {
    width: 8px; // adjust the scrollbar width as needed
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; // adjust the track background color as needed
  }

  &::-webkit-scrollbar-thumb {
    background: #888; // adjust the thumb color as needed
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; // adjust the thumb color on hover as needed
  }
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
  justify-content: space-between; /* Align items to the start and end of the container */
  align-items: center;
  width: 80%;
  margin-top: 15px;

  &:first-child {
    margin-top: 0; /* Remove top margin for the first comment */
  }

  p {
    width: 100%; /* Adjust width to occupy the entire container */
    margin: 0; /* Remove default margins */
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #21272a;
  }

  input {
    flex: 1; /* Allow the input to expand and take available space */
    margin-top: 10px; /* Add a margin-top for the input */
    padding: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 26px; /* Increase the font size by 2px */
    line-height: 28px;
    color: #21272a;
    border-radius: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row; // Add this
  justify-content: space-between; // Change from 'center' to 'space-between'
  align-items: center;
  padding: 20px;
  border: 1px solid #8bbe8a;
  border-radius: 8px;
  margin: 20px auto;
  background-color: #f6e8d3;

  input {
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #8bbe8a;
    width: 70%;
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
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #3563e9;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  min-width: 100px; // Adjust this value as needed

  &:active {
    position: relative;
    top: 3px;
  }

  &:disabled {
    background: #a6c8ff;
  }
`;

export const EditCompleteButton = styled(Button)`
  min-width: 120px; // Adjust this value as needed
`;