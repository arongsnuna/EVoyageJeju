import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  margin: 170px 50px 300px;
`;

export const TitleContainer = styled.div`
  border: 5px solid black;

  text-align: center;
`;

export const PostingContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 25px 50px;
    padding: 0;
    // border: 1px solid grey;

    width: 24%;
  }

  img {
    cursor: pointer;

    border: 1px solid grey;
    width: 700px;
    height: 600px;
  }

  p {
    width: 700px;
    text-align: center;
  }
`;