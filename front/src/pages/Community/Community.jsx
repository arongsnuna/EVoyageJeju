import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserState } from '../../UserContext';
import { Container, TitleContainer, TypeContainer, TypeButton, IndexContainer, ListContainer, ButtonContainer } from "./Community.style";

const Community = () => {
  const { user } = useUserState();
  const [activeTab, setActiveTab] = useState('travel');
  const [posts, setPosts] = useState([
    // 여행 게시글
    { id: 1, title: '게시글 1', type: '여행', author: '작성자1', date: '2023-06-01', likes: 10 },
    { id: 2, title: '게시글 2', type: '여행', author: '작성자2', date: '2023-06-02', likes: 5 },
    // 전기차 게시글
    { id: 3, title: '게시글 3', type: '전기차', author: '작성자3', date: '2023-06-03', likes: 7 },
    { id: 4, title: '게시글 4', type: '전기차', author: '작성자4', date: '2023-06-04', likes: 12 },
  ]);
  const [posting, setPosting] = useState(false)

  // const handleTravelTab = async () => {
  //   const res = await Api.get('/community/:postingId');
  //   setPosts(res.data)
  //   setActiveTab('travel')
  // }

  // const handleElecTab = async () => {
  //   const res = await Api.get('/community/:postingId');
  //   setPosts(res.data)
  //   setActiveTab('electricCar')
  // }
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // const filteredPosts = posts.filter((post) => {
  //   if (activeTab === 'travel') {
  //     return post.title.startsWith('여행');
  //   } else if (activeTab === 'electricCar') {
  //     return post.title.startsWith('전기차');
  //   }
  //   return false;
  // });

  return (
    <Container>
      <TitleContainer>
        <p>게시판</p>
      </TitleContainer>
      <TypeContainer>
        <div>
          <TypeButton 
            fontColor='#21272A'
            onClick={() => handleTabChange('travel')}
          >여행탭
          </TypeButton>
          <TypeButton
            fontColor='#3563E9'
            onClick={() => handleTabChange('electricCar')}
          >전기차탭
          </TypeButton>
        </div>
      </TypeContainer>
      <div>
        <IndexContainer>
          <div>
            <p className='index'>글 번호</p>
            <p className='title'>제목</p>
            <p className='author'>글쓴이</p>
            <p className='date'>등록일</p>
            <p className='likeCount'>좋아요</p>
          </div>
        </IndexContainer>
        <ListContainer>
          {posts.map((post) => (
            <div key={post.id}>
              <p className='index'>{post.id}</p>
              <Link className='title'>{post.title}</Link>
              <p className='author'>{post.author}</p>
              <p className='date'>{post.date}</p>
              <p className='likeCount'>{post.likes}</p>
            </div>
          ))}
        </ListContainer>
      </div>
      <ButtonContainer>
        <div>
          {user ? (
            <button>글쓰기</button>
          ) : (
            <button onClick={() => alert("로그인 후 이용해 주세요.")}>글쓰기</button>
          )}
        </div>
      </ButtonContainer>
      <div>
        {/* 페이징 넘버링 추가필요 */}
      </div>
    </Container>
  );
};

export default Community;

