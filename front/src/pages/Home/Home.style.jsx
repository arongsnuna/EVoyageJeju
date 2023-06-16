import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 200px;
  text-align: center;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 120px 25px 70px;
  padding: 40px 0 30px 60px;
  border-radius: 50px;
  border-top: 65px dotted #f9f8f7;

  width: 2580px;
  height: 600px;

  background: #FFE69C;

  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.5;
  text-align: center;
  font-style: normal;
  letter-spacing: 0.2px;
  color: #212121;

  div {
    padding: 50px 0 100px;
    border-radius: 50px;
    border: 10px dashed #218721;

    width: 2500px;

    background: #f9f8f7;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const FirstChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 20px 70px;
  padding: 80px 20px 80px 40px;
  border-radius: 50px;
  border-top: 65px dotted #f9f8f7;

  gap: 20px;
  width: 2600px;
  height: 600px;

  background: #caf5d7;
`;

export const SecondChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 20px 200px;
  padding: 80px 20px 50px 40px;
  border-radius: 50px;
  border-top: 65px dotted #f9f8f7;

  gap: 20px;
  width: 2600px;
  height: 700px;

  background: #caf5d7;
`;

export const FirstGraphContainer = styled.div`
  flex: 1;
  padding: 40px 0 20px 20px;
  border-radius: 50px;
  max-width: 60%;
  height: 600px;
  width: 400px;
  background: #f9f8f7;
`;

export const SecondGraphContainer = styled.div`
  flex: 1;
  padding: 40px 0 70px 20px;
  border-radius: 50px;

  height: 600px;
  background: #f9f8f7;
`;

export const Title = styled.h2`
  margin-bottom: 30px;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const ExplanationRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 25px 0 100px;
  padding: 40px 40px 20px 40px;
  border-radius: 50px;

  width: 655px;
  height: 600px;

  background: #FFE69C;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 28px;
  line-height: 1.5;
  text-align: center;
  font-style: normal;
  letter-spacing: 0.2px;
  color: #212121;

  p {
    margin: 0;
    margin-bottom: 10px;
  }
`;

export const ExplanationLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

margin: 25px 25px 20px;
padding: 40px 40px 70px;
border-radius: 50px;

width: 655px;
height: 600px;

background: #FFE69C;

font-family: "Noto Sans KR", sans-serif;
font-size: 28px;
line-height: 1.5;
text-align: center;
font-style: normal;
letter-spacing: 0.2px;
color: #212121;

p {
  margin: 0;
  margin-bottom: 10px;
}
`;