import React from "react";
import VideoBackground from "../../components/Home/VideoBackground";
import {
  Container,
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
      <VideoBackground />
    </Container>
  );
}

export default Home;
