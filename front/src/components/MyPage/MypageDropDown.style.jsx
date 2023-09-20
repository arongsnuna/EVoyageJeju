import styled from "styled-components";

export const Ul = styled.ul`
  width: 250px;
  height: 150px;
  margin: 0;
`;

export const Li = styled.li`
  margin-top: 15px;
  list-style: none;

  button {
    cursor: pointer;
    border: none;
    border: 4px solid #218721;
    width: 100%;
    height: 75px;

    background: #FFFFFF;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
    text-align: center;
    color: #218721;

    &:hover {
      background: #218721;
      color: #FFFFFF;
    }

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;