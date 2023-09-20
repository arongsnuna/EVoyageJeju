import React, { useState } from 'react';
import * as Api from '../../../utils/api';
import { Link, useNavigate } from "react-router-dom";
import { isNameValid, isNickNameValid, isIDVaild, isPasswordValid } from '../../../utils/util';
import { Container, TitleContainer, FormContainer, FormFieldset, ButtonContainer, FormButton, AlreadySignUpText } from './RegisterForm.style';

import logo from '../logo.png'
import { ROUTE } from '../../../routes/routes';

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid = isNameValid(id) && isNickNameValid(nickname) && isIDVaild(id) && isPasswordValid(password) && (password === confirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "/register" 엔드포인트로 post요청함.
      await Api.post("register", {
        userId: id,
        userName: name,
        userNickname: nickname,
        userPassword: password
      });

      // 로그인 페이지로 이동함.
      navigate(ROUTE.LOGIN.link);
    } catch (err) {
      if (err.response.status === 400) {
        // 아이디, 닉네임 중복되면 alert 창 출력
        alert(err.response.data.error);
      }
      console.log("회원가입에 실패하였습니다.", err);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <img src={logo} alt='EVoyageJeju Logo' />
        <Link to={ROUTE.Home.link}>탐라는차다</Link>
      </TitleContainer>
      <FormContainer onSubmit={handleSubmit}> 
        <legend>🙋🏻회원가입</legend>
        <FormFieldset>
          <label>이름</label><br />
          <input 
            name="name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          {!isNameValid(name) && (
            <p>이름을 2글자 이상 작성해주십시오.</p>
          )}
        </FormFieldset>
        <FormFieldset>
          <label>별명(추후 수정 가능)</label><br />
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
          <label>ID</label><br />
          <input 
            name="id" 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
          {!isIDVaild(id) && (
            <p>아이디를 4글자 이상 작성해주십시오.</p>
          )}
        </FormFieldset>
        <FormFieldset>
          <label>Password</label><br />
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
          <label>Password 확인</label><br />
          <input 
            name="confirmPassword" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          {password !== confirmPassword && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        </FormFieldset>
        <ButtonContainer>
          <FormButton 
            type="submit" 
            disabled={!isFormValid}
          >
            Register
          </FormButton>
        </ButtonContainer>
        <AlreadySignUpText>
          <Link to={ROUTE.LOGIN.link}>Already have an account?</Link>
        </AlreadySignUpText>
      </FormContainer>
    </Container>
  );
}

export default RegisterForm;