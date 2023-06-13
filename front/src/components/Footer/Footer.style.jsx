import styled from "styled-components";

export const Container = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  transform: translateY(0);

  background: #3563e9;

  p {
    margin: 0;
    padding: 24px 80px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 140%;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;
