import React from "react";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  // Add other styles as needed
`;

function VideoBackground() {
  console.log("Video URL: ");
  return (
    <StyledVideo autoPlay loop muted>
      <source src={"public/videos/travel.mp4"} type="video/mp4" />
    </StyledVideo>
  );
}

export default VideoBackground;
