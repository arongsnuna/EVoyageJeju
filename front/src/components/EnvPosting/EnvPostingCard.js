import React, { useState, useEffect } from "react";

import { Container, PostingContainer } from "./EnvPostingCard.style";

function EnvPostingCard({ cardtext, setPopUpCard }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <PostingContainer>
        <p>{cardtext}</p>
        <button onClick={() => setPopUpCard(false)}>취소합니다</button>
      </PostingContainer>
    </Container>
  );
}

export default EnvPostingCard;