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
    border: none;
    border-bottom: 1px solid #C1C7CD;
    width: 100%;
    height: 75px;

    background: #F2F4F8;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 140%;
    text-align: center;
    color: #697077;

    &:hover {
      background: #0F62FE;
      color: #FFFFFF;
    }

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;