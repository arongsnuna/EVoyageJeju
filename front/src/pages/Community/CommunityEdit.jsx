import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "../../routes";
import * as Api from "../../api";

const CommunityEdit = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const { id, title: initialTitle, content: initialContent } = location.state;
  const { postId } = useParams();

  // postId에 해당하는 게시글 정보
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const getPostInfo = async () => {
    try {
      const res1 = await Api.get(`posts/${postId}`);
      const res2 = await Api.get(`users/${res1.data.userId}`);
      setTitle(res1.data.postTitle);
      setAuthor(res2.data.userNickname);
      setContent(res1.data.postContent);
      setDate(res1.data.createdAt.substr(0, 10)); // 0000-00-00 형식으로 자르기
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostInfo();
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    // TODO: 글 수정 로직 추가
    // console.log('ID:', id);
    console.log("New Title:", title);
    console.log("New Content:", content);
    // 수정 로직을 추가하고, 필요한 경우 서버로 데이터를 보내거나 상태를 업데이트하세요.
    // 수정 후 필요한 작업을 수행하고, 예를 들어 상세 페이지로 이동할 수 있습니다.
    navigate(ROUTE.COMMUNITYDetail.link);
  };

  const handleCancel = () => {
    // 수정 취소 시 상세 페이지로 이동
    navigate(ROUTE.COMMUNITYDetail.link);
  };

  return (
    <div>
      <h2>게시글 수정 페이지</h2>
      <div>
        <label>
          제목:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
      </div>
      <div>
        <label>
          본문:
          <textarea value={content} onChange={handleContentChange} />
        </label>
      </div>
      <div>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleCancel}>취소</button>
      </div>
    </div>
  );
};

export default CommunityEdit;
