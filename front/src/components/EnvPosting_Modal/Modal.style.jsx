import styled, { keyframes } from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackGroundContainer = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 680px;
  
  position: absolute;
  top: -500;
  width: 50%;
  height: 90%;

  transform: translate(0%, 0%);
  overflow: auto;

  background: white;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  margin: 30px 30px 0 20px;

  background: none;
  font-size: 40px;

  cursor: pointer;

  :hover {
    color: red;
    font-weight: 700;
  }

  :active {
    position: relative;
    top: 5px;
  }
`

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 70px;

  width: 95%;
  height: 100%;
`;

export const StyledSlider = styled(Slider)`
  margin: 0 10px 50px 100px;
  
  width: 82%;
  height: 88%;

  .slick-prev {
    left: -60px;
    font: none;
    ::before {
      font-size: 50px;
      color: black;
    }
  };
  .slick-next {
    font: none;
    ::before {
      font-size: 50px;
      color: black;
    }
  }

  div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;