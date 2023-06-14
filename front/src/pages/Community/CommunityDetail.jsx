import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '../../routes';
import { Container, TitleContainer, TypeContainer, TypeButton, ContentContainer, ButtonContainer } from './CommunityDetail.style';
import * as Api from '../../api';
import { useUserState } from '../../UserContext';

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { user } = useUserState();

  // postId에 해당하는 게시글 정보 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [postUserId, setPostUserId] = useState('');
  // postId에 해당하는 게시물에 좋아요를 누른 userId 저장
  const [followers, setFollowers] = useState([]);
  // 좋아요를 누른 userId 수(length) 저장
  const [likeCount, setLikeCount] = useState(0);

  // 해당 postId의 게시물 정보 불러오기
  const getPostInfo = async () => {
    try {
      const res1 = await Api.get(`community/${postId}`);
      const userIdOrigin = res1.data.userId
      const res2 = await Api.get(`users/${userIdOrigin}`);
      setTitle(res1.data.postTitle)
      setAuthor(res2.data.userNickname)
      setContent(res1.data.postContent)
      setPostUserId(userIdOrigin)
      setDate(res1.data.createdAt.substr(0, 10))  // 0000-00-00 형식으로 자르기
    } catch (err) {
      console.log(err)
    }
  };

  // // 해당 postId의 게시물의 좋아요 수 불러오기
  // const getLikeCount = async () => {
  //   await Api.get(`like/${postId}`).then((res) => setFollowers(res.data));
  //   setLikeCount(followers.length)
  // };

  useEffect(() => {
    getPostInfo();
    // getLikeCount();
  }, []);


  // 삭제 기능 구현
  const handleDelete = async () => {
    try {
      await Api.post(`community/${postId}`)
      alert('해당 게시물이 삭제되었습니다.')
    } catch (err) {
      console.log(err)
    }
    navigate(ROUTE.COMMUNITY.link);
  };


  // '좋아요 버튼' 클릭 시 (followers에 userId 추가)
  const handleLikeClick = async (e) => {
    e.preventDefault();
    try  {
      await Api.post(`like/increment`, { postId: postId, userId: user.userId })
      // getLikeCount();
      alert('해당 게시물에 좋아요를 누르셨습니다.')
    } catch (err) {
      console.log(err)
    }
  };

  // '좋아요 버튼' 클릭 취소 시 (followers에 userId 삭제)
  const handleCancelClick = async (e) => {
    e.preventDefault();
    try  {
      await Api.post(`like/decrement`, { postId: postId, userId: user.userId });   
      // getLikeCount();
      alert('해당 게시물에 좋아요를 취소하셨습니다.');
    } catch (err) {
      console.log(err)
    }
  };

  // followers(좋아요를 누른 사람들 모음)에 현재 로그인된 유저가 포함됐는지 확인
  // True(포함됨): already clicked, False(불포함): not clicked.
  const isClicked = followers.filter((follower) => follower.userId === user.userId)

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      {/* <TypeContainer>
        <div>
          <TypeButton 
            fontColor='#21272A'
            // onClick={() => handleTabChange('travel')}
          >여행탭
          </TypeButton>
          <TypeButton
            fontColor='#3563E9'
            // onClick={() => handleTabChange('electricCar')}
          >전기차탭
          </TypeButton>
        </div>
      </TypeContainer> */}
      <ContentContainer>
        <div className='title-box'>
          <div>{title}</div>
        </div>
        <div className='posting-infobox'>
          <div className='info'>글쓴이</div>
          <div>{author}</div>
          <div className='info'>등록일</div>
          <div>{date}</div> 
          <div className='info'>좋아요 수</div>
          <div>{likeCount}</div>
        </div>
        <div className='content-box'>
          <div>{content}</div>
        </div>
      </ContentContainer>
      <ButtonContainer>
        <div>
          <button className='tolist' onClick={() => navigate(ROUTE.COMMUNITY.link)}>목록</button>
          {postUserId === user.userId &&
            <>
              <button onClick={() => navigate(`/community/${postId}/edit`)}>수정</button>
              <button className='delete' onClick={handleDelete}>삭제</button>
            </>
          }
          {!isClicked ? (
            <button className='like' onClick={handleLikeClick}>❤️</button>
          ) : (
            <button className='like' onClick={handleCancelClick}>🤍</button>
          )}
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default CommunityDetail;
  