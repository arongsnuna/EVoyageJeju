import React, { useState } from "react";
import { isNickNameValid } from "../../utils/util";

import styled from "styled-components";

function EditNickName({ currentNickName, setIsEditableNickName}) {
  const [nickname, setNickName] = useState(currentNickName);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // e.stopPropagation();

    // try {

    // } catch (e) {
    //   console.log("에러 발생 :", e);
    // }
  setIsEditableNickName(false);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input 
        name="name" 
        type="text" 
        value={nickname}
        onChange={(e) => setNickName(e.target.value)} 
      />
      {!isNickNameValid(nickname) && (
        <p style={{color: '#FD0918'}}>사용할 별명을 2글자 이상 작성해주십시오.</p>
      )}
      <button
        type='submit'
        // disabled={}
      >확인</button>
      <button
        onClick={() => setIsEditableNickName(false)}
      >취소</button>
    </FormContainer>
  );
}

export default EditNickName;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  margin: 0 100px 15px;
  // margin-bottom: 15px;
  border: 1px solid #DDE1E6;

  width: 700px;

  legend {
    justify-content: flex-start;
    padding-bottom: 35px;

    width: 600px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 110%;
    color: #21272A;
  }
`;