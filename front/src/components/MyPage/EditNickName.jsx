import React, { useState } from "react";
import { isNickNameValid } from "../../utils/util";

import { FormContainer, ButtonContainer } from "./EditMyPage.style";

function EditNickName({ currentNickName, setIsEditingNickName, setEditComplete }) {
  const [nickname, setNickName] = useState(currentNickName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // e.stopPropagation();

    // try {

    // } catch (e) {
    //   console.log("에러 발생 :", e);
    // }
  setIsEditingNickName(false);
  setEditComplete(true);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <input 
          name="name" 
          type="text" 
          value={nickname}
          onChange={(e) => setNickName(e.target.value)} 
        />
      </div>
      <ButtonContainer>
        <button
          type='submit'
          disabled={!isNickNameValid(nickname)}
        >확인</button>
        <button
          onClick={() => setIsEditingNickName(false)}
        >취소</button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default EditNickName;