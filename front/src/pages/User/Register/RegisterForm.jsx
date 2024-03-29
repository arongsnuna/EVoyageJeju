import React, { useState } from "react";
import * as Api from "../../../api";
import { useNavigate } from "react-router-dom";
import {
  isNameValid,
  isNickNameValid,
  isIDVaild,
  isPasswordValid,
  isPasswordSame,
} from "../../../utils/util";
import {
  TitleContainer,
  FormContainer,
  FormFieldset,
  ButtonContainer,
  FormButton,
  AlreadySignUpText,
} from "./RegisterForm.style";

import logo from "../logo.png";

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid =
    isNameValid(id) &&
    isNickNameValid(nickname) &&
    isIDVaild(id) &&
    isPasswordValid(password) &&
    isPasswordSame({ password, confirmPassword });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "/register" 엔드포인트로 post요청함.
      await Api.post("register", {
        userId: id,
        userName: name,
        userNickname: nickname,
        userPassword: password,
      });

      // 로그인 페이지로 이동함.
      navigate("/login");
    } catch (err) {
      console.log("회원가입에 실패하였습니다.", err);

      // 아이디, 닉네임 중복되면 alert 창 출력
      alert(err.response.data);
    }
  };

  return (
    <>
      <TitleContainer>
        <img src={logo} alt="EVoyageJeju Logo" />
        <a href="/">탐라는차다</a>
      </TitleContainer>
      <FormContainer onSubmit={handleSubmit}>
        <legend>회원가입</legend>
        <FormFieldset>
          <label>이름</label>
          <br />
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!isNameValid(name) && <p>이름을 2글자 이상 작성해주십시오.</p>}
        </FormFieldset>
        <FormFieldset>
          <label>별명(추후 수정 가능)</label>
          <br />
          <input
            name="name"
            type="text"
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
          />
          {!isNickNameValid(nickname) && (
            <p>사용할 별명을 2글자 이상 작성해주십시오.</p>
          )}
        </FormFieldset>
        <FormFieldset>
          <label>ID</label>
          <br />
          <input
            name="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {!isIDVaild(id) && <p>아이디를 4글자 이상 작성해주십시오.</p>}
        </FormFieldset>
        <FormFieldset>
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid(password) && (
            <p>비밀번호를 4글자 이상 작성해주십시오.</p>
          )}
        </FormFieldset>
        <FormFieldset>
          <label>Password 확인</label>
          <br />
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!isPasswordSame({ password, confirmPassword }) && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        </FormFieldset>
        <ButtonContainer>
          <FormButton
            fontColor="#FFFFFF"
            backgroundColor="#3563E9"
            type="submit"
            disabled={!isFormValid}
          >
            Register
          </FormButton>
          <FormButton
            fontColor="#3563E9"
            backgroundColor="#FFFFFF"
            type="submit"
          >
            Login with Google
          </FormButton>
        </ButtonContainer>
        <AlreadySignUpText>
          <a href="/login">Already have an account?</a>
        </AlreadySignUpText>
      </FormContainer>
    </>
  );
}

export default RegisterForm;
