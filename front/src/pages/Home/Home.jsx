import React from "react";
import Co2EVCountChart from "../../components/Charts/Co2EVCountChart";
import PopulationBarChart from "../../components/Charts/PopulationBarChart";
import EVPieChart from "../../components/Charts/EVPieChart";
import {
  Container,
  ChartContainer,
  GraphContainer,
  Title,
  ExplanationRight,
  ExplanationLeft,
  Description,
} from "./Home.style";

function Home() {
  console.log("Rendering Home");

  return (
    <Container>
      <ChartContainer>
        <GraphContainer>
          <Co2EVCountChart />
        </GraphContainer>
        <ExplanationRight>
          <Title>제주도에서는 지금</Title>
          제주도의 차량 CO2 배출량 증가함과 동시에 제주도 전기차 보유 대수 또한
          증가하고 있습니다. <br />
          이는 전기차 보급량에 비해 전기차 사용이 적다는 문제점을 보여줍니다.
        </ExplanationRight>
      </ChartContainer>
      <ChartContainer>
        <ExplanationLeft>
          <Title>제주도의 전기차 수</Title>
          2020년 제주도의 인구는 2번째로 적지만 전기차량 보유 대수는 전국
          상위권을 유지하고 있습니다. <br />
          이것은 제주도 관광객을 위한 렌트용 전기차는 많다는 것을 알수있습니다.
        </ExplanationLeft>
        <GraphContainer>
          <PopulationBarChart />
        </GraphContainer>
        <GraphContainer>
          <EVPieChart />
        </GraphContainer>
      </ChartContainer>
      <Description>
        <Title>제주도 여행을 즐겨보세요</Title>
        웹사이트는 제주도 전기차를 활용하는 꿀팁을 제공하고, 제주도 관광객의
        여행 및 전기차 커뮤니티 게시판, 그리고 가까운 충전소를 손쉽게 찾을 수
        있는 기능이 있습니다. 사용자들은 제주도에서의 전기차 이용에 대한 정보를
        쉽게 얻을 수 있으며, 제주도 여행과 관련된 다양한 의견을 공유하고 소통할
        수 있는 커뮤니티를 형성할 수 있습니다. 또한, 가까운 충전소 위치와 충전
        시설에 대한 정보를 제공하여 사용자들이 전기차를 편리하게 충전할 수
        있도록 도와줍니다. 궁극적으로 제주도 관광객들에게 전기차 렌트 서비스의
        장점과 중요성을 알리고, 전기차 사용을 촉진하여 제주도의 차량 CO2
        배출량을 줄이는 것을 목표로 합니다.
      </Description>
    </Container>
  );
}

export default Home;
