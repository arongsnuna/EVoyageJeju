import React, { useState } from "react";
import { isPasswordValid } from "../../utils/util";

import { FormContainer, ButtonContainer } from "./EditMyPage.style";

function EditPassword({ currentPassword, setIsEditingPassword, setEditComplete }) {
  const [password, setPassword] = useState(currentPassword);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();

    // try {

    // } catch (e) {
    //   console.log("에러 발생 :", e);
    // }
    setIsEditingPassword(false);
    setEditComplete(true);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <input 
          name="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <ButtonContainer>
        <button
          type='submit'
          disabled={!isPasswordValid(password)}
        >확인</button>
        <button
          onClick={() => setIsEditingPassword(false)}
        >취소</button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default EditPassword;