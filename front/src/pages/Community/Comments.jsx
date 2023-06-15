import React, { useState, useEffect } from "react";
import { Container, ButtonContainer } from "./Comments.style";
import * as Api from "../../api";

function Comments({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState("");

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
  const addComment = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.post(`community/${postId}/comments`, {
        commentContent: newComment,
      });

      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("댓글 등록에 실패했습니다:", error);
    }
  };

  // 댓글 수정 준비
  const updatingComment = async (commentId, commentContent) => {
    setEditingCommentId(commentId);
    setEditingComment(commentContent);
  };

  // 댓글 수정
  const updateComment = async (commentId) => {
    try {
      await Api.put(`community/${postId}/comments/${commentId}`, {
        commentContent: editingComment,
      });

      setComments(
        comments.map((comment) =>
          comment.commentId === commentId
            ? { ...comment, commentContent: editingComment }
            : comment
        )
      );
      setEditingCommentId(null);
      setNewComment("");
      setEditingComment("");
    } catch (error) {
      console.error("댓글을 수정하는데 실패했습니다:", error);
    }
  };

  // 댓글 삭제
  const deleteComment = async (commentId) => {
    try {
      await Api.delete(`community/${postId}/comments/${commentId}`);

      setComments(
        comments.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error("댓글 삭제에 실패 했습니다", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h2>댓글창</h2>
      {comments.map((comment) => (
        <div key={comment.commentId}>
          {editingCommentId === comment.commentId ? (
            <input
              type="text"
              value={editingComment}
              onChange={(e) => setEditingComment(e.target.value)}
            />
          ) : (
            <p>{comment.commentContent}</p>
          )}

          {comment.userId === userId && (
            <>
              <button
                onClick={() =>
                  updatingComment(comment.commentId, comment.commentContent)
                }
              >
                수정
              </button>
              <button onClick={() => deleteComment(comment.commentId)}>
                삭제
              </button>

              {editingCommentId === comment.commentId && (
                <button onClick={() => updateComment(comment.commentId)}>
                  수정 완료
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
        <button onClick={addComment}>등록</button>
      </div>
    </div>
  );
}

export default Comments;
