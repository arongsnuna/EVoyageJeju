import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  margin: 170px 0 400px;
`;

export const HeadContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SliderContainer = styled.div`
  margin: 0 30px;
  // padding: 200px 0;
  height: 700px;
  border: 5px solid black;

  background: red;
`;

export const StyledSlider = styled(Slider)`
  margin: 30px;

  background: blue;

  p {
    font-size: 50px;
    text-align: center;
  }
`;