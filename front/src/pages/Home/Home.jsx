import React from "react";

import { Container, HeadContentContainer, SliderContainer, StyledSlider,  } from "./Home.style";

function Home() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <Container>
      <HeadContentContainer>
        <h1>여긴 메인 화면이야!</h1>
        <h1>여긴 메인 화면이야!</h1>
        <h1>여긴 메인 화면이야!</h1>
        <h1>여긴 메인 화면이야!</h1>
      </HeadContentContainer>
      <SliderContainer>
        <h2> Single Item</h2>
        <StyledSlider {...settings}>
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
        </StyledSlider>
      </SliderContainer>
    </Container>
  );
}

export default Home;

