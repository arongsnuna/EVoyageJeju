import React from "react";
import VideoBackground from "../../components/Home/VideoBackground";
import Co2EVCountChart from "../../components/Charts/Co2EVCountChart";
import PopulationBarChart from "../../components/Charts/PopulationBarChart";
import EVPieChart from "../../components/Charts/EVPieChart";
import { Container, Title, Section, ChartContainer } from "./Home.style";

function Home() {
  console.log("Rendering Home");

  return (
    <Container>
      <ChartContainer>
        <PopulationBarChart />
      </ChartContainer>
      <ChartContainer>
        <Co2EVCountChart />
      </ChartContainer>
      <ChartContainer>
        <EVPieChart />
      </ChartContainer>
    </Container>
  );
}

export default Home;
