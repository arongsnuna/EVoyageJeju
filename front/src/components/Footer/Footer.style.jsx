import styled from "styled-components";

export const Container = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;

  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  transform: translateY(0);

  background: #FCD565;

  p {
    margin: 0;
    padding: 24px 80px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 140%;
    color: #000000;
    text-align: center;
    letter-spacing: 0.5px;
  }
`;
