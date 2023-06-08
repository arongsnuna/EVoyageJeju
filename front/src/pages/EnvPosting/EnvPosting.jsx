import React, { useState } from "react";
import Modal from "../../components/EnvPosting_Modal/Modal";

import { Container, TitleContainer, PostingContainer } from "./EnvPosting.style";
import logo from "../User/logo.png";

function EnvPosting() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => { 
    setIsModalOpen(false)
  };

  const postings = [
    { id: 1, text: '가', cardtext: [
        {id: 1, text: 1},
        {id: 2, text: 2},
        {id: 3, text: 3},
      ]
    },
    { id: 2, text: '나', cardtext: [
        {id: 1, text: '강'},
        {id: 2, text: '다'},
      ]
    },
    { id: 3, text: '다', cardtext: [
        {id: 1, text: '이'},
        {id: 2, text: '디'},
        {id: 3, text: '야'},
        {id: 4, text: '임'},
      ]
    },
    { id: 4, text: '라', cardtext: [
        {id: 1, text: 'ㅋ'},
        {id: 2, text: 'ㅎ'},
      ]
    },
    { id: 5, text: '마', cardtext: [
        {id: 1, text: '치'},
        {id: 2, text: '즈'},
        {id: 3, text: '케'},
        {id: 4, text: '이'},
        {id: 5, text: '크'},
      ]
    },
    { id: 6, text: '바', cardtext: [
        {id: 1, text: '토'},
        {id: 2, text: '마'},
        {id: 3, text: '토'},
        {id: 4, text: '쉐'},
        {id: 5, text: '이'},
        {id: 6, text: '크'},
      ]
    },
  ];
  console.log(selectedItem)
  return (
    <Container>
      <TitleContainer>
        <p>전기차는 왜 환경에 좋고, 어떻게 이용해야 할까요?</p>
        <p>여긴 뭐라고 적어야할까...</p>
      </TitleContainer>
      {isModalOpen  && (
        <Modal 
          selectedItem={selectedItem}
          closeModal={closeModal} 
        />
      )}
      <PostingContainer>
        {postings.map((posting) => (
          <div>
            <img 
              key={posting.id} 
              src={logo} 
              onClick={() => { 
                setIsModalOpen(true) 
                setSelectedItem(posting.cardtext)
              }} />
            <p>{posting.text}</p>
          </div>
        ))}        
      </PostingContainer>
    </Container>
  );
}

export default EnvPosting;