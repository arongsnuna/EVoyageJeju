import React from "react";

import { Container, BackGroundContainer, ModalContainer, CancelButton, SliderContainer, StyledSlider } from "./Modal.style";

function Modal(props) {
  const { closeModal, selectedItem } = props;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(selectedItem)

  return (
    <Container>
      <BackGroundContainer
        onClick={closeModal}
      ></BackGroundContainer>
      <ModalContainer>
        <SliderContainer>
          <CancelButton onClick={closeModal}>X</CancelButton>
          <StyledSlider {...settings}>
            {selectedItem.map((item) => (
              <div>
                <img src={item.cardUrl} />
              </div>
            ))}
          </StyledSlider>
        </SliderContainer>
      </ModalContainer>
    </Container>
  )
}

export default Modal;