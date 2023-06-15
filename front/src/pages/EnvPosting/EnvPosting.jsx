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
        <p>🚜 전기차 이용 꿀팁보시고 환경도 챙겨가세요! 🌏</p>
      </TitleContainer>
      {isModalOpen  && (
        <Modal 
          selectedItem={selectedItem}
          closeModal={closeModal} 
        />
      )}
      <PostingContainer>
        <div>
          {postings.map((posting) => (
            <div className="thumbnail">
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
        </div>       
      </PostingContainer>
    </Container>
  );
}

export default EnvPosting;