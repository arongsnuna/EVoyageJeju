import React, { useState } from "react";

function Comment({ postId }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      postId: 1,
      author: "Author 1",
      text: "Nice post!",
      date: "2023-06-01",
    },
    {
      id: 2,
      postId: 1,
      author: "Author 2",
      text: "I agree!",
      date: "2023-06-02",
    },
    {
      id: 3,
      postId: 2,
      author: "Author 3",
      text: "Great info.",
      date: "2023-06-03",
    },
    // 더미 데이터
  ]);
  const [newComment, setNewComment] = useState("");

  // 이 게시물에만 댓글이 보여야함
  const postComments = comments.filter((comment) => comment.postId === postId);

  const handleAddComment = () => {
    // 새 댓글 추가
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        postId,
        author: "User", // 로그인한 사용자
        text: newComment,
        date: new Date().toISOString().split("T")[0], // 오늘 날짜
      },
    ]);

    // 댓글 작성 후 댓글창 비우기
    setNewComment("");
  };

  return (
    <div>
      <h2>Comments</h2>
      {postComments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>{comment.text}</p>
          <p>{comment.date}</p>
        </div>
      ))}
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default Comment;
