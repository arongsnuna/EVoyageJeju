import React, { useState } from "react";
import { isPasswordValid } from "../../utils/util";
import * as Api from '../../utils/api';
import { useUserState } from "../../UserContext";
import { FormContainer, ButtonContainer } from "./EditMyPage.style";

function EditPassword({ currentPassword, setIsEditablePassword, setEditComplete }) {
  const { user } = useUserState();
  const [password, setPassword] = useState(currentPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await Api.put(`users/${user.userId}`, {
        userNickname: user.userNickname,
        userPassword: password,
        confirmPassword: password
      })
    } catch (e) {
      console.log("에러 발생 :", e);
    }
    setIsEditablePassword(false);
  setEditComplete(true);
  }

  return (
    <FormContainer>
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
          onClick={handleSubmit}
          disabled={!isPasswordValid(password)}
        >확인</button>
        <button
          onClick={() => setIsEditablePassword(false)}
        >취소</button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default EditPassword;