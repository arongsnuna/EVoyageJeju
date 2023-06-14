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
import * as Api from "../../api";

const CommunityWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await Api.post("posts", {
        postTitle: title,
        postContent: content,
        postType: type,
      });
      await Api.get(`posts`);
    } catch (err) {
      console.log(err);
    }
    // navigate(`/community/${}`);
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
            <input type="radio" onChange={() => setType("전기차")} />
            <label>전기차</label>
          </div>
          <div>
            <input type="radio" onChange={() => setType("여행")} />
            <label>여행</label>
          </div>
        </RadioContainer>
        <ContentContainer>
          <div>
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>본문</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </ContentContainer>
        <ButtonContainer>
          <button
            className="tolist"
            onClick={() => navigate(ROUTE.COMMUNITY.link)}
          >
            목록
          </button>
          <button className="save" onClick={handleSave}>
            저장
          </button>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default CommunityWrite;
