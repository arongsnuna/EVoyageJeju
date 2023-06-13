import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';

const CommunityEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title: initialTitle, content: initialContent } = location.state;
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    // TODO: 글 수정 로직 추가
    console.log('ID:', id);
    console.log('New Title:', title);
    console.log('New Content:', content);
    // 수정 로직을 추가하고, 필요한 경우 서버로 데이터를 보내거나 상태를 업데이트하세요.
    // 수정 후 필요한 작업을 수행하고, 예를 들어 상세 페이지로 이동할 수 있습니다.
    () => navigate(ROUTE.COMMUNITYDetail.link);
  };

  const handleCancel = () => {
    // 수정 취소 시 상세 페이지로 이동
    () => navigate(ROUTE.COMMUNITYDetail.link);
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