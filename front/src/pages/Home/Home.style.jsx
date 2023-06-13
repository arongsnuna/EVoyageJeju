import styled from "styled-components";

export const Container = styled.div`
  padding-top: 200px;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 600px;
  max-width: 95%; // Adjust this as per your needs
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 10px 20px 30px 40px;
`;

export const GraphContainer = styled.div`
  flex: 1;
  max-width: 60%; // Adjust this as per your needs
  height: 600px;
`;

export const Title = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExplanationRight = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 20%;
  margin-right: 100px;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
`;

export const ExplanationLeft = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 20%;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
`;

export const Description = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  min-width: 300px;
  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;
