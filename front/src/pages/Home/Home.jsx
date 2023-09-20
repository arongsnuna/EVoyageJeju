import React from "react";
import Co2EVCountChart from "../../components/Charts/Co2EVCountChart";
import PopulationBarChart from "../../components/Charts/PopulationBarChart";
import EVPieChart from "../../components/Charts/EVPieChart";
import {
  Container,
  TitleContainer,
  FirstChartContainer,
  SecondChartContainer,
  FirstGraphContainer,
  SecondGraphContainer,
  Title,
  ExplanationRight,
  ExplanationLeft,
  Description,
} from "./Home.style";

function Home() {
  console.log("Rendering Home");

  return (
    <Container>
      <Description>
        <div>
          <h1>🍊 제주도 전기차, 탐라는 차다! 🚜</h1>
          <p>
            ☝️우리는 해당 사이트를 통해 제주도 여행 시 전기차 이용을 장려할 수 있도록 여러 서비스를 지원하고 있습니다.☝️
          </p>
          <p>
            ✌️사용자들은 전기차를 이용하면서 궁금했던 정보를 쉽게 얻을 수 있으며,
            제주도 여행과 관련된 다양한 의견을 공유하여 소통하는 커뮤니티를 형성할 수 있습니다.✌️
          </p>
          <p>
            👌또한, 가까운 충전소 위치와 충전시설에 대한 정보를 제공함으로써 사용자들이 전기차를 편리하게 충전할 수 있도록 도와줍니다.👌
          </p>
          <p>
            🤟우리 사이트는 제주도 관광객들에게 전기차 렌트 서비스의 장점과 중요성을 알리고,
            전기차 사용을 촉진하여 제주도의 차량 CO2 배출량을 줄이는 것을 목표로 합니다.🤟
          </p>
        </div>
      </Description>
      <FirstChartContainer>
        <FirstGraphContainer>
          <Co2EVCountChart />
        </FirstGraphContainer>
        <ExplanationRight>
          <div>
            <Title>🍊제주도는 지금?!</Title>
            <p>📌 제주도의 차량 CO2 배출량 증가함과<br />동시에 제주도 전기차 보유 대수 또한<br />증가하고 있습니다.</p>
            <p>📌 이는 전기차 보급량에 비해<br />전기차 사용이 적다는 문제점을 보여줍니다.</p>
          </div>
        </ExplanationRight>
      </FirstChartContainer>
      <SecondChartContainer>
        <ExplanationLeft>
          <div>
            <Title>🚜제주도 인구와<br />전기차 보급률의 상관관계는?!</Title>
            <p>📌 2020년 제주도의 인구 분포는<br />하위 2번째이지만 전기차량 보유 대수는 전국 상위권을 유지하고 있습니다.</p>
            <p>📌 이를 통해 제주도 관광객을 위한 렌트용 전기차가 많이 보급되고 있다는 사실을<br />유추할 수 있습니다.</p>
          </div>
        </ExplanationLeft>
        <SecondGraphContainer>
          <PopulationBarChart />
        </SecondGraphContainer>
        <SecondGraphContainer>
          <EVPieChart />
        </SecondGraphContainer>
      </SecondChartContainer>
    </Container>
  );
}

export default Home;