import React, { useState } from "react";
import EditNickName from '../../../components/MyPage/EditNickName';
import EditPassword from '../../../components/MyPage/EditPassword';
import { TitleContainer, FormContainer, FormPhotoDiv, FormUserDiv, ButtonContainer, EditCompletedText } from "./Mypage.style";

function MyPage() {
  const [Photo, setPhoto] = useState(null);
  const [nickname, setNickName] = useState("yedara");
  const [password, setPassword] = useState("12345678");

  const name = '강다영';
  const id = 'wkvksrl100';

  // EditForm 활성화를 위한 state
  const [isEditableNickName, setIsEditableNickName] = useState(false);
  const [isEditablePassword, setIsEditablePassword] = useState(false);

  // 수정 완료 알림을 위한 state
  const [editComplete, setEditComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <>
      <TitleContainer>
        <p>마이페이지</p>
      </TitleContainer>
      <FormContainer>
        <fieldset>
          <FormPhotoDiv>
            <legend>Profile Photo</legend>
            <div>
              <img src={Photo} />
              <input 
                type='file'
                accept='Photo/*'
                name='profilePicture'
              />
              <button>remove</button>
            </div>
            <div>
              <p>Photo requirements:</p>
              <ol>
                <li>Min. 400px x 400px</li>
                <li>Max. 2MB</li>
                <li>Your Face or Company Logo</li>
              </ol>
            </div>
          </FormPhotoDiv>
          <FormUserDiv>
            <legend>User Details</legend>
            <div>
              <label>이름</label>
              <p>{name}</p>
            </div>

            <div>
              <label>별명</label>
              {isEditableNickName ? (
                <EditNickName
                  currentNickName={nickname}
                  setIsEditableNickName={setIsEditableNickName}
                  setEditComplete={setEditComplete}
                />
              ) : (
                <>
                  <p>{nickname}</p>
                  <button 
                    onClick={() => setIsEditableNickName(true)}
                  >수정</button>
                </>
              )}
            </div>

            <div>
              <label>ID</label>
              <p>{id}</p>
            </div>

            <div>
              <label>Password</label>
              {isEditablePassword ? (
                <EditPassword
                  currentPassword={password}
                  setIsEditablePassword={setIsEditablePassword}
                  setEditComplete={setEditComplete}
                />
              ) : (
                <>
                  <p>{password}</p>
                  <button
                    onClick={() => setIsEditablePassword(true)}
                  >수정</button>
                </>
              )}
            </div>
            <ButtonContainer>
              <button 
                type="submit" 
              >
                회원탈퇴
              </button>
            </ButtonContainer>
          </FormUserDiv>
        </fieldset>
        {editComplete ? (
          <EditCompletedText> 
            <p><strong>Successfully Saved.</strong> Your profile settings have been saved.</p>
          </EditCompletedText>
        ) : null }
      </FormContainer>
    </>
  );
}

export default MyPage;