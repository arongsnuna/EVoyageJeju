import styled from "styled-components";

export const Container = styled.div`
  padding-top: 200px;
  text-align: center;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 400px;
`;

export const Title = styled.h2`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExplanationRight = styled.div`
  width: 40%;
  margin-right: 100px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 23px;
  line-height: 1.5;
  text-align: left;
  font-style: normal;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const ExplanationLeft = styled.div`
  width: 34%;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 23px;
  line-height: 1.5;
  text-align: left;
  font-style: normal;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const Description = styled.div`
  max-width: 1900px;
  margin: 20px auto;
  padding: 10px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 23px;
  line-height: 1.5;
  text-align: center;
  font-style: normal;
  letter-spacing: 0.2px;
  color: #212121;
`;