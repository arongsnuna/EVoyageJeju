import React, { useEffect, useRef, useState } from "react";
import EditNickName from '../../../components/MyPage/EditNickName';
import EditPassword from '../../../components/MyPage/EditPassword';
import { useUserState } from "../../../UserContext";
import * as Api from '../../../utils/api';
import { TitleContainer, FormContainer, FormPhotoDiv, FormPhotoContent, FormPhotoInfo, FormUserDiv, ButtonContainer, EditCompletedText } from "./Mypage.style";

function MyPage() {
  const { user } = useUserState();
  const imgRef = useRef();

  const [currentUser, setCurrentUser] = useState(user);
  const { userName, userNickname, userId, userPassword, userImage } = currentUser;
  
  // 프로필 이미지 변경을 위한 state
  const [profileImage, setProfileImage] = useState(userImage);
  const [previewPhoto, setPreviewPhoto] = useState('');
  // console.log(profileImage)
  
  // useEffect(() => {
  //     Api.get(`users/${user.userId}`).then((res) => setCurrentUser(res.data))
  // }, [user.userId])

  // EditForm 활성화를 위한 state
  const [isEditableNickName, setIsEditableNickName] = useState(false);
  const [isEditablePassword, setIsEditablePassword] = useState(false);

  // 수정 완료 알림을 위한 state
  const [editComplete, setEditComplete] = useState(false);

  // 이미지 업로드 버튼 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('uploadImage', profileImage);
      formData.append('userNickname', user.userNickname);
      formData.append('userPassword', user.userPassword);
      formData.append('confirmPassword', user.userPassword);
      console.log(formData.get('uploadImage'))
      alert("값 넣었다!")
      const res = await Api.put(`users/${user.userId}`, formData);
      alert('성공')
      const updatedUser = res.data;
      setCurrentUser(updatedUser)
    } catch (err) {
      alert("실패")
    }
    console.log(currentUser)
  }

  // 업로드된 이미지 파일 state 저장, 이미지 미리보기
  const saveImgFile = (e) => {
    setProfileImage(e.target.files[0])

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPreviewPhoto(reader.result);
    };
  };

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
              <FormPhotoContent>
                <div className="profilebox">
                  <img src={previewPhoto} />
                </div>
                <div className="buttonbox">
                  <label htmlFor='input-file'>Upload Phote</label>
                  <input 
                    id='input-file'
                    type='file'
                    accept='Photo/*'
                    name='profilePicture'
                    onChange={saveImgFile}
                    ref={imgRef}
                  />
                  <button onClick={handleSubmit}>저장</button>
                </div>
              </FormPhotoContent>
              <FormPhotoInfo>
                <div>
                  <p>Photo requirements:</p>
                </div>
                <div>
                  <ol>
                    <li>Min. 400px x 400px</li>
                    <li>Max. 2MB</li>
                    <li>Your Face or Company Logo</li>
                  </ol>
                </div>
              </FormPhotoInfo>
            </div>
          </FormPhotoDiv>
          <FormUserDiv>
            <legend>User Details</legend>
            <div>
              <label>이름</label>
              <p>{userName}</p>
            </div>

            <div>
              <label>별명</label>
              {isEditableNickName ? (
                <EditNickName
                  currentNickName={userNickname}
                  setIsEditableNickName={setIsEditableNickName}
                  setEditComplete={setEditComplete}
                />
              ) : (
                <>
                  <p>{userNickname}</p>
                  <button 
                    onClick={() => setIsEditableNickName(true)}
                  >수정</button>
                </>
              )}
            </div>

            <div>
              <label>ID</label>
              <p>{userId}</p>
            </div>

            <div>
              <label>Password</label>
              {isEditablePassword ? (
                <EditPassword
                  currentPassword={userPassword}
                  setIsEditablePassword={setIsEditablePassword}
                  setEditComplete={setEditComplete}
                />
              ) : (
                <>
                  <p>{userPassword}</p>
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