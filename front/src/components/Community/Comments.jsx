import React, { useState, useEffect } from "react";
import * as Api from "../../utils/api";
import {
  Container,
  TitleContainer,
  ListContainer,
  ButtonContainer,
  CommentContainer,
  Button,
  RegisterButtonContainer,
  RegisterButton,
  EditCompleteButton,
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
    <Container>
      <TitleContainer>
        <h2>댓글창</h2>
      </TitleContainer>
      <ListContainer>
        {comments.map((comment) => (
          <CommentContainer
            key={comment.commentId}
            isUserComment={comment.userId === userId}
          >
            {editingCommentId === comment.commentId ? (
              <input
                type="text"
                value={editingComment}
                onChange={(e) => setEditingComment(e.target.value)}
              />
            ) : (
              <div>
                <p>작성자 Id: {comment.userId}</p>
                <p>{comment.commentContent}</p>
              </div>
            )}

            {comment.userId === userId && (
              <ButtonContainer>
                <Button
                  onClick={() =>
                    updatingComment(comment.commentId, comment.commentContent)
                  }
                >
                  수정
                </Button>
                <Button onClick={() => deleteComment(comment.commentId)}>
                  삭제
                </Button>
                {editingCommentId === comment.commentId && (
                  <EditCompleteButton
                    onClick={() => updateComment(comment.commentId)}
                  >
                    수정완료
                  </EditCompleteButton>
                )}
              </ButtonContainer>
            )}
          </CommentContainer>
        ))}
        <div>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <RegisterButton onClick={addComment}>등록</RegisterButton>
        </div>
      </ListContainer>
    </Container>
  );
}

export default Comments;