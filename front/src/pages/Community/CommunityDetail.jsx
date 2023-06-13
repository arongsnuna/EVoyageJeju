import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import Comment from "./Comment";

const CommunityDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    postId = "3",
    postTitle = "제주도 서귀포 충전소 11122222",
    postContent = "여기 충전소 좋아요! 가보세요! 111222",
    postType = "전기차",
    createdAt = "2023-06-11T21:02:04.000Z",
    isSave = "1",
    isEdit = "0",
    isDelete = "0",
    postImage = null,
    userId = "wonn22",
    likeCount = 0,
  } = location.state || {};

  const handleEdit = () => {
    // 수정 기능 구현
    console.log("Edit");
    navigate(ROUTE.COMMUNITYEdit.link);
  };

  const handleDelete = () => {
    // 삭제 기능 구현
    console.log("Delete");
  };

  const handleLike = () => {
    // 좋아요 기능 구현
    console.log("Like");
  };

  const handleList = () => {
    // 목록으로 이동
    navigate(ROUTE.COMMUNITY.link);
  };

  return (
    <div>
      <h2>게시글 상세 페이지</h2>
      <div>
        <h3>제목: {postTitle}</h3>
        <p>글쓴이: {userId}</p>
        <p>등록일: {createdAt}</p>
        <p>좋아요 수: {likeCount}</p>
        <p>본문 내용: {postContent}</p>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleLike}>좋아요</button>
        <button onClick={handleList}>목록</button>
      </div>
      <div>
        <Comment postId={postId} userId={userId} />
      </div>
    </div>
  );
};

export default CommunityDetail;
