import React from "react";
import VideoBackground from "../../components/Home/VideoBackground";
import Co2EVCountChart from "../../components/Charts/Co2EVCountChart";
import PopulationBarChart from "../../components/Charts/PopulationBarChart";
import EVPieChart from "../../components/Charts/EVPieChart";

import {
  Container,
  Title,
  ChartContainer,
  HeadContentContainer,
  SliderContainer,
  StyledSlider,
  VideoBackgroundContainer,
  VideoBackgroundInner,
  VideoBackgroundVideo,
  VideoBackgroundContent,
} from "./Home.style";

function Home() {
  console.log("Rendering Home");
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <Title>도시별 인구수</Title>
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
