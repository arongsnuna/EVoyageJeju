import React, { useState } from "react";
import { isNickNameValid } from "../../utils/util";
import * as Api from '../../utils/api';
import { useUserState } from "../../UserContext";
import { FormContainer, ButtonContainer } from "./EditMyPage.style";

function EditNickName({ currentNickName, setIsEditableNickName, setEditComplete }) {
  const { user } = useUserState();
  const [nickname, setNickName] = useState(currentNickName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await Api.put(`users/${user.userId}`, {
        userNickname: nickname,
        userPassword: user.userPassword,
        confirmPassword: user.userPassword
      })
    } catch (e) {
      console.log("에러 발생 :", e);
    }
    setIsEditableNickName(false);
  setEditComplete(true);
  }

  return (
    <FormContainer>
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
          disabled={!isNickNameValid(nickname)}
          onClick={handleSubmit}
        >확인</button>
        <button
          onClick={() => setIsEditableNickName(false)}
        >취소</button>
      </ButtonContainer>
    </FormContainer>
  );
}

export default EditNickName;