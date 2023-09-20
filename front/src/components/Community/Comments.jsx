import React, { useState, useEffect } from "react";
import * as Api from "../../utils/api";
import {
  ListContainer,
  InputContainer,
  ButtonContainer,
  CommentContainer,
} from "./Comments.style";

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
      console.error("댓글을 가져오지 못했습니다:", error);
    }
  };

  // 댓글 작성
  const addComment = async () => {
    if (!userId) {
      alert("로그인 후 댓글을 작성해주세요");
      return;
    }
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
      const response = await Api.put(
        `community/${postId}/comments/${commentId}`,
        {
          commentContent: editingComment,
        }
      );

      setComments(
        comments.map((comment) =>
          comment.commentId === commentId
            ? { ...comment, commentContent: response.data.commentContent }
            : comment
        )
      );
      setEditingCommentId(null);
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
    <>
      <ListContainer>
        <div>
          <InputContainer>
            <input  
              type="text"
              placeholder="댓글을 남겨주세요!"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addComment}>등록</button>
          </InputContainer>
          {comments.map((comment) => (
            <CommentContainer
              key={comment.commentId}
              isUserComment={comment.userId === userId}
            >
              <div className="content-box">
                {editingCommentId === comment.commentId ? (
                  <div>
                    <p className="id">{comment.userId}</p>
                    <input
                      type="text"
                      value={editingComment}
                      onChange={(e) => setEditingComment(e.target.value)}
                    />
                  </div>
                ) : (
                  <div>
                    <p className="id">{comment.userId}</p>
                    <p className="content">{comment.commentContent}</p>
                  </div>
                )}
                  <div className="button-box">
                  {comment.userId === userId && (
                    <ButtonContainer>
                      {editingCommentId === comment.commentId ? (
                        <button
                          onClick={() => updateComment(comment.commentId)}
                        >
                          수정완료
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            updatingComment(comment.commentId, comment.commentContent)
                          }
                        >
                          수정
                        </button>
                      )}
                      <button onClick={() => deleteComment(comment.commentId)}>
                        삭제
                      </button>

                    </ButtonContainer>
                  )}
                </div>
              </div>
            </CommentContainer>
          ))}
        </div>
      </ListContainer>
    </>
  );
}

export default Comments;