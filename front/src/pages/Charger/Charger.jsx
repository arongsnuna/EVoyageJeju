import React from "react";
import Map from "../../components/Charger/Map";

import { Container, TitleContainer } from "./Charger.style";

function Charger() {

  return (
    <Container>
      <TitleContainer>
        <p>🔌 가까운 전기차 충전소는 어디에 있을까요? 🔌</p>
      </TitleContainer>
      <Map />
    </Container>
  );
}

export default Charger;