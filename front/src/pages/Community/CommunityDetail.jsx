import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';

const CommunityDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, author, date, content, likeCount } = location.state;
 

  const handleEdit = () => {
    // 수정 기능 구현
    console.log('Edit');
    () => navigate(ROUTE.COMMUNITYEdit.link);
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
    () => navigate(ROUTE.COMMUNITY.link);
  };

  return (
    <div>
      <h2>게시글 상세 페이지</h2>
      <div>
        <h3>제목: {title}</h3>
        <p>글쓴이: {author}</p>
        <p>등록일: {date}</p>
        <p>좋아요 수: {likeCount}</p>
        <p>본문 내용: {content}</p>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleLike}>좋아요</button>
        <button onClick={handleList}>목록</button>
      </div>
    </div>
  );
};

export default CommunityDetail;
  