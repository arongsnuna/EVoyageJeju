import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';
import { Container, TitleContainer, TypeContainer, TypeButton, ContentContainer, ButtonContainer } from './CommunityDetail.style';

const CommunityDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title = '제목입니다', author = '제주도전기차', date = '2023-05-06', content = '내용입니다', likeCount = 0 } = location.state || {};

  const handleEdit = () => {
    // 수정 기능 구현
    console.log('Edit');
    navigate(ROUTE.COMMUNITYEdit.link);
  };

  const handleDelete = () => {
    // 삭제 기능 구현
    console.log('Delete');
  };

  const handleLike = () => {
    // 좋아요 기능 구현
    console.log('Like');
  };

  const handleList = () => {
    // 목록으로 이동
    navigate(ROUTE.COMMUNITY.link);
  };

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
          <button onClick={handleList}>목록</button>
          <button onClick={handleEdit}>수정</button>
          <button className='delete' onClick={handleDelete}>삭제</button>
          <button className='like' onClick={handleLike}>좋아요</button>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default CommunityDetail;
  