import React, {useState} from "react";
import EnvPostingCard from './EnvPostingCard';

function EnvPostingList({ posting, logo }) {
  const { text, cardtext} = posting;

  const [popupCard, setPopUpCard] = useState(false);

  return (
    <>
      {popupCard ? (
        <div style={{width: '100%'}}>
          <EnvPostingCard 
            cardtext={cardtext}
            setPopUpCard={setPopUpCard}
          />
        </div>
      ) : (
        <div>
          <img src={logo} onClick={() => setPopUpCard(true)} />
          <p>{text}</p>
        </div>
      )}
    </>
  );
}

export default EnvPostingList;