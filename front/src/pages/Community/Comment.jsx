import React, { useState, useEffect } from "react";
import { Container, ButtonContainer } from "./Comment.style";
import * as Api from "../../api";

function Comment({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Api.get(`community/${postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.log("댓글을 가져오지 못했습니다:", error);
      }
    };

    fetchComments();
  }, [postId]);

  // 댓글 작성
  const handleAddComment = async () => {
    const comment = {
      commentContent: newComment,
    };

    try {
      const response = await Api.post(`community/${postId}/comments`, comment);

      setComments((prevComments) => [...prevComments, response.data]);

      setNewComment("");
    } catch (error) {
      console.error("댓글 등록에 실패했습니다:", error);
      console.error("request에 문제가 있습니다", error.request);
      console.error("response에 문제가 있습니다", error.response);
    }
  };

  // 댓글 수정
  const handleEditComment = async (commentId, newContent) => {
    try {
      const response = await Api.put(
        `community/${postId}/comments/${commentId}`,
        { commentContent: newContent }
      );
      setComments(
        comments.map((comment) =>
          comment.id === commentId ? response.data : comment
        )
      );
    } catch (error) {
      console.error("댓글을 수정하는데 실패했습니다:", error);
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    try {
      await Api.delete(`community/${postId}/comments/${commentId}`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("댓글을 삭제하는데 실패했습니다:", error);
    }
  };

  return (
    <Container>
      <ButtonContainer>
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>등록</button>
        </div>
      </ButtonContainer>
      {comments.map((comment) => (
        <ButtonContainer>
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
            <p>{comment.date}</p>
            {userId === comment.userId && (
              <>
                <button
                  onClick={() => handleEditComment(comment.id, newComment)}
                >
                  수정
                </button>
                <button onClick={() => handleDeleteComment(comment.id)}>
                  삭제
                </button>
              </>
            )}
          </div>
        </ButtonContainer>
      ))}
    </Container>
  );
}

export default Comment;
