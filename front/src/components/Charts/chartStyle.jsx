import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: -200px 0 50px 100px;
  button {
    height: 40px;
    position: absolute;
    cursor: pointer;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    color: #3563e9;
  
    background: #FFFFFF;
    border-radius: 5px;
    border-color: #3563e9;

    &:hover {
      background: #3563e9;
      color: #FFFFFF  ;
    }
  }
  .prev {
    margin-right: 120px;
  }
  .next {
    margin-left: 120px;
  }
`;
export const PopulationBarChartTitle = styled.h2`
  margin-top: -5px;
  text-align: center;
`;
