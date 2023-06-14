import React, { useState } from "react";
import Modal from "../../components/EnvPosting_Modal/Modal";
import { postings } from "./posting.jsx";

import { Container, TitleContainer, PostingContainer } from "./EnvPosting.style";

function EnvPosting() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => { 
    setIsModalOpen(false)
  };

  console.log(selectedItem)
  return (
    <Container>
      <TitleContainer>
        <p>전기차는 왜 환경에 좋고, 어떻게 이용해야 할까요?</p>
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
              src={posting.thumbnailUrl} 
              onClick={() => { 
                setIsModalOpen(true) 
                setSelectedItem(posting.contentUrl)
              }} />
            <p>{posting.title}</p>
          </div>
        ))}        
      </PostingContainer>
    </Container>
  );
}

export default EnvPosting;