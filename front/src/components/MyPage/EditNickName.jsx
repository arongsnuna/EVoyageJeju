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
      setIsEditableNickName(false);
      setEditComplete(true);
    } catch (err) {
      if (err.response.status === 400) {
        alert(err.response.data.error);
      }
    console.log('유저 닉네임 수정에 실패하였습니다.', err);
    }
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