import React, { useState } from "react";
import {
  Container,
  TitleContainer,
  InputContainer,
  RadioContainer,
  ContentContainer,
  ButtonContainer,
} from "./CommunityWrite.style";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";

const CommunityWrite = () => {
  const [title, setTitle] = useState("뚜룹");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleList = () => {
    // 목록으로 이동
    navigate(ROUTE.COMMUNITY.link);
  };

  const handleSave = () => {
    // TODO: 글 저장 로직 추가
    console.log("Title:", title);
    console.log("Content:", content);
    // 저장 로직을 추가하고, 필요한 경우 서버로 데이터를 보내거나 상태를 업데이트하세요.
    // 저장 후 필요한 작업을 수행하고, 예를 들어 글 목록 페이지로 이동할 수 있습니다.
    navigate(ROUTE.COMMUNITYDetail.link);
  };

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <InputContainer>
        <RadioContainer>
          <p>유형</p>
          <div>
            <input type="radio" value="electricCar" name="tab" />
            <label>전기차탭</label>
          </div>
          <div>
            <input type="radio" value="travel" name="tab" />
            <label>여행탭</label>
          </div>
        </RadioContainer>
        <ContentContainer>
          <div>
            <label>제목</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div>
            <label>본문</label>
            <textarea value={content} onChange={handleContentChange} />
          </div>
        </ContentContainer>
        <ButtonContainer>
          <button onClick={handleList}>목록</button>
          <button onClick={handleSave}>저장</button>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default CommunityWrite;
