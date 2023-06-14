import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditNickName from "../../../components/MyPage/EditNickName";
import EditPassword from "../../../components/MyPage/EditPassword";
import { useUserState } from "../../../UserContext";
import * as Api from "../../../utils/api";
import {
  TitleContainer,
  FormContainer,
  FormPhotoDiv,
  FormPhotoContent,
  FormPhotoInfo,
  FormUserDiv,
  ButtonContainer,
  EditCompletedText,
} from "./Mypage.style";
import { ROUTE } from "../../../routes/routes";
import { useUserDispatch } from "../../../UserContext";
import { LOGOUT } from "../../../reducer/action";

function MyPage() {
  const { user } = useUserState();
  const imgRef = useRef();
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const [currentUser, setCurrentUser] = useState(user);
  const { userName, userNickname, userId, userPassword, userImage } =
    currentUser;

  // 프로필 이미지 변경을 위한 state
  const [profileImage, setProfileImage] = useState(userImage);

  // EditForm 활성화를 위한 state
  const [isEditableNickName, setIsEditableNickName] = useState(false);
  const [isEditablePassword, setIsEditablePassword] = useState(false);

  // 수정 완료 알림을 위한 state
  const [editComplete, setEditComplete] = useState(false);

  useEffect(() => {
    Api.get(`users/${user.userId}`).then((res) => setCurrentUser(res.data));
  }, [userImage]);

  const validateForm = () => {
    if (profileImage && profileImage.size > 1024 * 1024) {
      alert("이미지 크기는 1MB 이하여야 합니다.");
      return false;
    }
    return true;
  };

  // 이미지 업로드 버튼 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validateForm()) {
        return;
      }
      const formData = new FormData();
      formData.append("userImage", profileImage);
      formData.append("userNickname", user.userNickname);
      formData.append("userPassword", user.userPassword);
      formData.append("confirmPassword", user.userPassword);
      console.log(formData.get("userImage"));
      const res = await Api.putFile(`users/${user.userId}`, formData);
      alert("프로필 업로드에 성공하셨습니다.");
      const updatedUser = res.data;
      setCurrentUser(updatedUser);
    } catch (err) {
      alert("프로필 업로드에 실패하셨습니다.");
    }
  };

  // 업로드된 이미지 파일 state 저장, 이미지 미리보기
  const saveImgFile = (e) => {
    setProfileImage(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const passwordInput = prompt("탈퇴를 위한 비밀번호를 입력해주십시오.");
      console.log(passwordInput);
      await Api.post(`users/${user.userId}`, {
        userPassword: passwordInput,
      });
      alert(`${user.userNickname}님의 탈퇴가 처리되었습니다.`);
      // 로그아웃 처리
      sessionStorage.removeItem("userToken");
      dispatch({ type: LOGOUT });

      navigate(ROUTE.Home.link);
    } catch (err) {
      console.log(err);
      // alert(err.response.data)
    }
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
                  <img src={profileImage} />
                </div>
                <div className="buttonbox">
                  <label htmlFor="input-file">Upload Phote</label>
                  <input
                    id="input-file"
                    type="file"
                    accept="image/*"
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
                  <button onClick={() => setIsEditableNickName(true)}>
                    수정
                  </button>
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
                  <p></p>
                  <button onClick={() => setIsEditablePassword(true)}>
                    수정
                  </button>
                </>
              )}
            </div>
            <ButtonContainer>
              <button onClick={handleDelete}>회원탈퇴</button>
            </ButtonContainer>
          </FormUserDiv>
        </fieldset>
        {editComplete ? (
          <EditCompletedText>
            <p>
              <strong>Successfully Saved.</strong> Your profile settings have
              been saved.
            </p>
          </EditCompletedText>
        ) : null}
      </FormContainer>
    </>
  );
}

export default MyPage;
