import React from "react";
import logo from "../User/logo.png";

import EnvPostingList from "../../components/EnvPosting/EnvPostingList";

import { Container, TitleContainer, PostingContainer } from "./EnvPosting.style";

function EnvPosting() {
  const postings = [
    { id: 1, text: '가', cardtext: '가' },
    { id: 2, text: '나', cardtext: '나' },
    { id: 3, text: '다', cardtext: '다' },
    { id: 4, text: '라', cardtext: '라' },
    { id: 5, text: '마', cardtext: '마' },
    { id: 6, text: '바', cardtext: '바' },
  ];

  return (
    <Container>
      <TitleContainer>
        <h2>여긴 제목</h2>
        <h1>[[[ 전기차가 환경을 구한다는 사실을 알고 계시나욥?! ]]]</h1>
        <br />
        <h2>여기에서 map method를 통해 썸네일을 만들거야</h2>
        <h2>썸네일을 만들면 콘텐츠가 팝업되게 할 거고</h2>
        <h2>여기서도 react-slick를 써서 옆으로 이동되게 구현할 꺼야!</h2>
        <h2>여기서 Modal을 써야하는지, 그냥 배경 불투명한 카드를 팝업 시켜야하는지 더 생각해봐야해!</h2>
      </TitleContainer>
      <PostingContainer>
        {postings.map((posting) => (
          <EnvPostingList 
            posting={posting} 
            logo={logo}
          />
        ))}
      </PostingContainer>
    </Container>
  );
}

export default EnvPosting;