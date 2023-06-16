import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: -200px 0 50px 320px;
  button {
    height: 48px;
    position: absolute;
    cursor: pointer;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #ffffff  ;

    background: #218721;
    border-radius: 5px;
    border-color: #3563e9;

    &:hover {
      background: #175917;
      color: #ffffff;
    }
  }
  .prev {
    margin-right: 120px;
  }
  .next {
    margin-left: 130px;
    margin-right: 20px;
  }
`;
export const PopulationBarChartTitle = styled.h2`
  margin-top: -5px;
  text-align: center;
  font-size: 28px;
`;