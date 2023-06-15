import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserState } from '../../UserContext';
import * as Api from '../../api';
import { Container, TitleContainer, TypeContainer, TypeButton, IndexContainer, ListContainer, ButtonContainer } from "./Community.style";
import { ROUTE } from '../../routes';

const Community = () => {
  const navigate = useNavigate();
  const { user } = useUserState();
  // 전체 || (여행&전기차) 구분을 위한 state
  const [activeTab, setActiveTab] = useState(true);
  // 여행 || 전기차 구분을 위한 state
  const [activeSpecificTab, setActiveSpecificTab] = useState(false);
  // 전체 조회한 post 저장
  const [posts, setPosts] = useState([]);
  // 탭 전환 시 postType에 맞게 post 저장
  const [travel, setTravel] = useState([]);
  const [elec, setElec] = useState([]);

  const likeCount = 0;

  const updateCommunity = async () => {
    try {
      const res = await Api.get('community');
      const dataWithAuthor = await Promise.all(
        res.data.map(async (post) => {
          const userRes = await Api.get(`users/${post.userId}`);
          // const likeRes = await Api.get(`likes/${post.postId}`);
          return { ...post, 
            author: userRes.data.userNickname, 
            // likeCount: likeRes.data.postId.length,  
          };
        })
      );
      console.log(dataWithAuthor)
      setPosts(dataWithAuthor);
    } catch (err) {
      console.log("에러 발생 :", err);
    }
  };

  useEffect(() => {
    updateCommunity();
  }, [activeTab, activeSpecificTab]);

  const handleAllTab = () => {
    setActiveTab(true);
  };

  const handleTravelTab = async () => {
    const travelList = posts.filter((post) => post.postType === '여행')
    setActiveTab(false)
    setActiveSpecificTab(false)
    setTravel(travelList)
  }

  const handleElecTab = async () => {
    const elecList = posts.filter((post) => post.postType === '전기차')
    setActiveTab(false)
    setActiveSpecificTab(true)
    setElec(elecList)
  }

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <TypeContainer>
        <div>
          <TypeButton 
            disabled={activeTab}
            onClick={handleAllTab}
          >전체
          </TypeButton>
          <TypeButton 
            disabled={!activeTab && activeSpecificTab===false}
            onClick={handleTravelTab}
          >여행
          </TypeButton>
          <TypeButton
            disabled={!activeTab && activeSpecificTab===true}
            onClick={handleElecTab}
          >전기차
          </TypeButton>
        </div>
      </TypeContainer>
      <div>
        <IndexContainer>
          <div>
            <p className='index'>글 번호</p>
            <p className='title'>제목</p>
            <p className='author'>글쓴이</p>
            <p className='type'>구분</p>
            <p className='date'>등록일</p>
            <p className='likeCount'>좋아요</p>
          </div>
        </IndexContainer>
        <ListContainer>
          {activeTab ? (
            posts.map((post) => (
              <div key={post.id}>
                <p className='index'>{post.postId}</p>
                <Link to={`/community/${post.postId}`} className='title'>{post.postTitle}</Link>
                <p className='author'>{post.author}</p>
                <p className='type'>{post.postType}</p>
                <p className='date'>{post.createdAt.substr(0, 10)}</p>
                <p className='likeCount'>{likeCount}</p>
              </div>
            ))
          ) : (
            activeSpecificTab ? (
              elec.map((post) => (
                <div key={post.id}>
                  <p className='index'>{post.postId}</p>
                  <Link to={`/community/${post.postId}`} className='title'>{post.postTitle}</Link>
                  <p className='author'>{post.author}</p>
                  <p className='type'>{post.postType}</p>
                  <p className='date'>{post.createdAt.substr(0, 10)}</p>
                  <p className='likeCount'>{likeCount}</p>
                </div>
              ))
            ) : (
              travel.map((post) => (
                <div key={post.id}>
                  <p className='index'>{post.postId}</p>
                  <Link to={`/community/${post.postId}`} className='title'>{post.postTitle}</Link>
                  <p className='author'>{post.author}</p>
                  <p className='type'>{post.postType}</p>
                  <p className='date'>{post.createdAt.substr(0, 10)}</p>
                  <p className='likeCount'>{likeCount}</p>
                </div>
              ))
            )
          )}
        </ListContainer>
      </div>
      <ButtonContainer>
        <div>
          {user ? (
            <button onClick={() => navigate(ROUTE.COMMUNITYWRITE.link)}>글쓰기</button>
          ) : (
            <button onClick={() => alert("로그인 후 이용해 주세요.")}>글쓰기</button>
          )}
        </div>
      </ButtonContainer>
      <div>
        {/* 페이징 넘버링 추가필요 */}
      </div>
    </Container>
  );
};

export default Community;


