import React, { useState, useEffect } from "react";
import { Container, ButtonContainer } from "./Comment.style";
import * as Api from "../../api";

function Comment({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);

  useEffect(() => {
    fetchComments();
  }, []);

  // 댓글 불러오기
  const fetchComments = async () => {
    try {
      const response = await Api.get(`community/${postId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.log("댓글을 가져오지 못했습니다:", error);
    }
  };

  // 댓글 작성
  const handleAddComment = async () => {
    try {
      const response = await Api.post(`community/${postId}/comments`, {
        content: newComment,
      });

      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("댓글 등록에 실패했습니다:", error);
    }
  };

  // 댓글 수정
  const handleEditComment = async (commentId, content) => {
    try {
      const response = await Api.put(
        `community/${postId}/comments/${commentId}`,
        { content }
      );
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, content: response.data.content }
            : comment
        )
      );
      setNewComment("");
      setEditingCommentId(null);
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
      console.error("댓글 삭제에 실패 했습니다", error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          {editingCommentId === comment.id ? (
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          ) : (
            <p>{comment.content}</p>
          )}

          {comment.userId === userId && (
            <>
              <button onClick={() => setEditingCommentId(comment.id)}>
                Edit
              </button>
              <button onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </button>

              {editingCommentId === comment.id && (
                <button onClick={() => handleEditComment(comment.id)}>
                  Submit Edit
                </button>
              )}
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
        <button onClick={handleAddComment}>Add comment</button>
      </div>
    </div>
  );
}

export default Comment;
