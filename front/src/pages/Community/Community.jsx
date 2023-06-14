import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserState } from "../../UserContext";
import Paging from "./Paging";
import SearchBar from "./SearchBar";
import * as Api from "../../api";
import {
  Container,
  TitleContainer,
  TypeContainer,
  TypeButton,
  IndexContainer,
  ListContainer,
  ButtonContainer,
} from "./Community.style";
import { ROUTE } from "../../routes";

const Community = () => {
  const navigate = useNavigate();
  const { user } = useUserState();

  const [activeTab, setActiveTab] = useState(false);
  // 전체 조회한 post 저장
  const [posts, setPosts] = useState([]);
  // 작성자(닉네임) 조회 후 저장
  const [authors, setAuthors] = useState([]);
  // 탭 전환 시 postType에 맞게 post 저장
  const [travel, setTravel] = useState([]);
  const [elec, setElec] = useState([]);
  const [page, setPage] = useState([]);
  const pageSize = 10;

  const likeCount = 0;

  const updateCommunity = async () => {
    try {
      console.log("updateCommunity 안입니다");
      const res = await Api.get(`community`); // ?page=${page}&pageSize=${pageSize}
      console.log("updateCommunity res", res);
      const dataWithAuthor = await Promise.all(
        res.data.map(async (post) => {
          const userRes = await Api.get(`users/${post.userId}`);
          // const likeRes = await Api.get(`like/${post.postId}`);
          return { ...post, author: userRes.data.userNickname };
        })
      );
      setPosts(dataWithAuthor);
    } catch (err) {
      console.log("커뮤니티 에러 발생 :", err);
    }
  };

  useEffect(() => {
    updateCommunity();
  }, []);

  const handleTravelTab = async () => {
    const travelList = posts.filter((post) => post.postType === "여행");
    setActiveTab(false);
    setTravel(travelList);
  };

  const handleElecTab = async () => {
    const elecList = posts.filter((post) => post.postType === "전기차");
    setActiveTab(true);
    setElec(elecList);
  };

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <TypeContainer>
        <div>
          <TypeButton fontColor="#21272A" onClick={handleTravelTab}>
            여행
          </TypeButton>
          <TypeButton fontColor="#3563E9" onClick={handleElecTab}>
            전기차
          </TypeButton>
        </div>
      </TypeContainer>
      <div>
        <IndexContainer>
          <div>
            <p className="index">글 번호</p>
            <p className="title">제목</p>
            <p className="author">글쓴이</p>
            <p className="date">등록일</p>
            <p className="likeCount">좋아요</p>
          </div>
        </IndexContainer>
        <ListContainer>
          {activeTab
            ? elec.map((post) => (
                <div key={post.id}>
                  <p className="index">{post.postId}</p>
                  <Link to={`/community/${post.postId}`} className="title">
                    {post.postTitle}
                  </Link>
                  {authors.map((author) => {
                    <p className="author">{author.userNickname}</p>;
                  })}
                  <p className="author">{post.author}</p>
                  <p className="date">{post.createdAt.substr(0, 10)}</p>
                  <p className="likeCount">{likeCount}</p>
                </div>
              ))
            : travel.map((post) => (
                <div key={post.id}>
                  <p className="index">{post.postId}</p>
                  <Link to={`/community/${post.postId}`} className="title">
                    {post.postTitle}
                  </Link>
                  {authors.map((author) => {
                    <p className="author">{author.userNickname}</p>;
                  })}
                  <p className="author">{post.author}</p>
                  <p className="date">{post.createdAt.substr(0, 10)}</p>
                  <p className="likeCount">{likeCount}</p>
                </div>
              ))}
        </ListContainer>
      </div>
      <ButtonContainer>
        <div>
          {user ? (
            <button onClick={() => navigate(ROUTE.COMMUNITYWRITE.link)}>
              글쓰기
            </button>
          ) : (
            <button onClick={() => alert("로그인 후 이용해 주세요.")}>
              글쓰기
            </button>
          )}
        </div>
      </ButtonContainer>
      <Paging onClick={handlePageChange} />
      <SearchBar />
    </Container>
  );
};

export default Community;
