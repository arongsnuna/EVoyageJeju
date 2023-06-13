import React, { useState } from 'react';
import { Container } from './CommunityWrite.style';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    // TODO: 글 저장 로직 추가
    console.log('Title:', title);
    console.log('Content:', content);
    // 저장 로직을 추가하고, 필요한 경우 서버로 데이터를 보내거나 상태를 업데이트하세요.
    // 저장 후 필요한 작업을 수행하고, 예를 들어 글 목록 페이지로 이동할 수 있습니다.
    () => navigate(ROUTE.COMMUNITYDetail.link);
  };

  return (
    <Container>
      <div>
        <div>
          <label>
            <input type="radio" value="electricCar" name="tab" />
            전기차탭
          </label>
          <label>
            <input type="radio" value="travel" name="tab" />
            여행탭
          </label>
        </div>
        <div>
          <label>
            제목:
          </label>
            <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>
            본문:
          </label>
            <textarea value={content} onChange={handleContentChange} />
          
        </div>
        <div>
          <button onClick={handleSave}>저장</button>
        </div>
      </div>
    </Container>
  );
};

export default CommunityWrite;