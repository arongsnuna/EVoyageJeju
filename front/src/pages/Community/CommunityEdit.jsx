import React, { useState, useEffect } from 'react';
import { Container, TitleContainer, InputContainer, RadioContainer, ContentContainer, ButtonContainer } from './CommunityWrite.style';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '../../routes';
import * as Api from "../../api";

const CommunityEdit = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  // postId에 해당하는 수정해야할 게시글 정보 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('');
  const [postImage, setPostImage] = useState();

  // type checked를 위한 변수
  const checkedtypeTravel = type === '여행' ? true : false;
  const checkedtypeElec = type === '전기차' ? true : false;


  useEffect(() => {
    Api.get(`community/${postId}`).then((res) => {
      setTitle(res.data.postTitle)
      setContent(res.data.postContent)
      setType(res.data.postType)
      setPostImage(res.data.postImage)
    })
  }, []);


  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('postImage', postImage);
      formData.append('postTitle', title);
      formData.append('postContent', content+' (수정됨)');
      formData.append('postType', type);
      console.log(formData.get('postImage'))

      const res1 = await Api.putFile(`community/${postId}/edit`, formData);
      console.log('사진 업로드 성공')
      const newPostId = res1.data.postId;
      navigate(`/community/${newPostId}`);
    } catch (err) {
      console.log(err)
      alert(err.response.data)
    }
  };

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <InputContainer>
        <RadioContainer>
          <p>유형</p>
          <div>
            <input 
              type="radio" 
              checked={checkedtypeElec}
              onChange={() => setType("전기차")}
            />
            <label>전기차</label>
          </div>
          <div>
            <input 
              type="radio" 
              checked={checkedtypeTravel}
              onChange={() => setType("여행")}
            />
            <label>여행</label>
          </div>
        </RadioContainer>
        <ContentContainer>
          <div>
            <label>제목</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>본문</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div className="buttonbox">
            <label htmlFor='input-file'>첨부파일</label>
            <input 
              id='input-file'
              type='file'
              accept='image/*'
              onChange={(e) => setPostImage(e.target.files[0])}
            />
          </div>
        </ContentContainer>
        <ButtonContainer>
          <button className="tolist" onClick={() => navigate(ROUTE.COMMUNITY.link)}>목록</button>
          <button className="save" onClick={handleEdit}>저장</button>
        </ButtonContainer>
      </InputContainer>
    </Container>
  );
};

export default CommunityEdit;