import React from "react";
import { Container } from "./Home.style";

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
      
    </Container>
  );
}

export default Home;
