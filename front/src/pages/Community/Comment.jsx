import React, { useState, useEffect } from "react";
import axios from "axios";
import { ROUTE } from "../../routes";

function Comment({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/community/${postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.log("Failed to fetch comments", error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    const comment = {
      commentContent: newComment,
    };

    try {
      const response = await axios.post(
        `/community/${postId}/comments`,
        comment
      );

      setComments((prevComments) => [...prevComments, response.data]);

      setNewComment("");
    } catch (error) {
      console.error("댓글 등록에 실패했습니다:", error);
      console.error("request에 문제가 있습니다", error.request);
      console.error("response에 문제가 있습니다", error.response);
    }
  };

  const handleEditComment = async (commentId, newContent) => {
    try {
      const response = await axios.put(
        `/community/${postId}/comments/${commentId}`,
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

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/community/${postId}/comments/${commentId}`);
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error("댓글을 삭제하는데 실패했습니다:", error);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>{comment.text}</p>
          <p>{comment.date}</p>
          {userId === comment.userId && (
            <>
              <button onClick={() => handleEditComment(comment.id, newComment)}>
                수정
              </button>
              <button onClick={() => handleDeleteComment(comment.id)}>
                삭제
              </button>
            </>
          )}
        </div>
      ))}
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>등록</button>
      </div>
    </div>
  );
}

export default Comment;
