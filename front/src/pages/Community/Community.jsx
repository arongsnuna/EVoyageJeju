import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserState } from "../../UserContext";
import * as Api from "../../api";
import SearchBar from "./SearchBar";
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
// 더미 데이터

const Community = () => {
  const navigate = useNavigate();
  const { user } = useUserState();
  const dummyData = [
    {
      postId: 1,
      postTitle: "평창 여행 후기",
      postContent: "평창이 아주 좋았습니다!",
      postType: "여행",
      createdAt: "2023-06-10T20:20:33.000Z",
      isSave: 1,
      isEdit: 0,
      isDelete: 0,
      postImage: null,
      userId: "id1",
    },
    {
      postId: 2,
      postTitle: "강릉 여행 후기",
      postContent: "강릉 커피거리가 정말 좋았습니다!",
      postType: "여행",
      createdAt: "2023-06-11T18:10:00.000Z",
      isSave: 1,
      isEdit: 0,
      isDelete: 0,
      postImage: null,
      userId: "id2",
    },
    {
      postId: 3,
      postTitle: "제주도 전기차 이야기",
      postContent: "제주도의 전기차 이용이 아주 편리합니다!",
      postType: "전기차",
      createdAt: "2023-06-12T20:20:33.000Z",
      isSave: 1,
      isEdit: 0,
      isDelete: 0,
      postImage: null,
      userId: "id3",
    },
  ];
  const [activeTab, setActiveTab] = useState(false);
  // 전체 조회한 post 저장
  const [posts, setPosts] = useState([dummyData]);
  const [page, setPage] = useState([1]);
  const [pageInfo, setPageInfo] = useState([]);
  const pageSize = 10;
  // 작성자(닉네임) 조회 후 저장
  const [authors, setAuthors] = useState([]);
  // 탭 전환 시 postType에 맞게 post 저장
  const [travel, setTravel] = useState([]);
  const [elec, setElec] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const updateCommunity = async () => {
    try {
      const res = await Api.get(`/community?page=${page}&pageSize=${pageSize}`);
      const dataWithAuthor = await Promise.all(
        res.data.map(async (post) => {
          const userRes = await Api.get(`users/${post.userId}`);
          return { ...post, author: userRes.data.userNickname };
        })
      );
      setPosts(dataWithAuthor);
      setPageInfo({
        page: res.data.page,
        pageSize: res.data.pageSize,
        totalPosts: res.data.totalPosts,
      });
    } catch (err) {
      console.log("에러 발생 :", err);
    }
  };

  useEffect(() => {
    updateCommunity();
  }, [page]);

  const goToPage = (pageNum) => setPage(pageNum);

  const likeCount = 0;

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

  const handleSearch = (searchType, keyword) => {
    let filteredPosts = [];

    const targetPosts = activeTab ? elec : travel;
    if (searchType === "title") {
      filteredPosts = targetPosts.filter((post) =>
        post.postTitle.includes(keyword)
      );
    } else if (searchType === "author") {
      filteredPosts = posts.filter((post) =>
        post.user.userNickname.includes(keyword)
      );
    }
    setSearchResult(filteredPosts);
  };

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <TypeContainer>
        <div>
          <TypeButton fontColor="#21272A" onClick={handleTravelTab}>
            여행탭
          </TypeButton>
          <TypeButton fontColor="#3563E9" onClick={handleElecTab}>
            전기차탭
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
                  <p className="date">{post.createdAt}</p>
                  <p className="likeCount">{likeCount}</p>
                </div>
              ))
            : travel.map((post) => (
                <div key={post.id}>
                  <p className="index">{post.postId}</p>
                  <Link to={`/community/${post.postId}`} className="title">
                    {post.postTitle}
                  </Link>
                  <p className="author">{post.author}</p>
                  <p className="date">{post.createdAt.subtr(0, 10)}</p>
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

      <div>
        {/* 페이지네이션 버튼 예시. 실제 구현시 페이지 개수에 맞게 동적으로 생성해야 합니다. */}
        <button onClick={() => goToPage(1)}>1</button>
        <button onClick={() => goToPage(2)}>2</button>
        <button onClick={() => goToPage(3)}>3</button>
      </div>

      <SearchBar onSearch={handleSearch} />
    </Container>
  );
};

export default Community;
