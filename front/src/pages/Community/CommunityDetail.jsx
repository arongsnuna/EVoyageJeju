import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';
import { Container, TitleContainer, TypeContainer, TypeButton, ContentContainer, ButtonContainer } from './CommunityDetail.style';
import * as Api from '../../api';
import { useUserState } from '../../UserContext';

const CommunityDetail = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUserState();

  // const { title = '제목입니다', author = '제주도전기차', date = '2023-05-06', content = '내용입니다', likeCount = 0 } = location.state || {};
  // postId에 해당하는 게시글 정보 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  // postId에 해당하는 게시물에 좋아요를 누른 userId 저장
  const [followers, setFollowers] = useState([]);
  // 좋아요를 누른 userId 수(length) 저장
  const [likeCount, setLikeCount] = useState(0);

  // const getPostInfo = async () => {
  //   await Api.get(`posts/${postId}`).then((res) => {
  //     setTitle(res.data.postTitle)
  //     setAuthor(res.data.userId)
  //     setContent(res.data.postContent)
  //     setDate(res.data.createdAt.substr(0, 10))  // 0000-00-00 형식으로 자르기
  //   })
  // };

  // const getLikeCount = async () => {
  //   await Api.get(`like/${postId}`).then((res) => setFollowers(res.data));
  //   setLikeCount(followers.length)
  // };

  // useEffect(() => {
  //   getPostInfo();
  //   getLikeCount();
  // }, []);


  const handleEdit = () => {
    // 수정 기능 구현
    console.log('Edit');
    navigate(ROUTE.COMMUNITYEdit.link);
  };


  const handleDelete = () => {
    // 삭제 기능 구현
    console.log('Delete');
  };


  // // '좋아요 버튼' 클릭 시 (followers에 userId 추가)
  // const handleLikeClick = async (e) => {
  //   e.preventDefault();
  //   try  {
  //     await Api.post(`like/increment`, { postId: postId, userId: user.userId })
  //     getLikeCount();
  //     alert('해당 게시물에 좋아요를 누르셨습니다.')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };

  // // '좋아요 버튼' 클릭 취소 시 (followers에 userId 삭제)
  // const handleCancelClick = async (e) => {
  //   e.preventDefault();
  //   try  {
  //     await Api.post(`like/decrement`, { postId: postId, userId: user.userId })      
  //     getLikeCount();
  //     alert('해당 게시물에 좋아요를 취소하셨습니다.')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // };

  // followers(좋아요를 누른 사람들 모음)에 현재 로그인된 유저가 포함됐는지 확인
  // True(포함됨): already clicked, False(불포함): not clicked.
  const isClicked = followers.filter((follower) => follower.userId === user.userId)

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <TypeContainer>
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
      </TypeContainer>
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
          <button onClick={() => navigate(ROUTE.COMMUNITY.link)}>목록</button>
          <button onClick={handleEdit}>수정</button>
          <button className='delete' onClick={handleDelete}>삭제</button>

          {/* {!isClicked ? (
            <button className='like' onClick={handleLikeClick}>❤️</button>
          ) : (
            <button className='like' onClick={handleCancelClick}>🤍</button>
          )} */}
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default CommunityDetail;
  