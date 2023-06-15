import React, { useState } from 'react';
import * as Api from '../../../utils/api';
import { LOGIN_SUCCESS } from '../../../reducer/action';
import { Link, useNavigate } from "react-router-dom";
import { isIDVaild, isPasswordValid } from '../../../utils/util';
import { useUserDispatch } from '../../../UserContext';
import { Container, TitleContainer, FormContainer, FormFieldset, ButtonContainer, FormButton, AlreadySignUpText } from './LoginForm.style';

import logo from '../logo.png'
import { ROUTE } from '../../../routes/routes';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 입력값에 대한 유효성 검사
  const isFormValid = isIDVaild(id) && isPasswordValid(password);

  // 로그인 handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // "/login" 엔드포인트로 post요청함.
      const res = await Api.post("login", {
        userId: id,
        userPassword: password,
      });
      // 유저 정보는 response의 data임.
      const user = res.data;
      // JWT 토큰은 유저 정보의 token임.
      const jwtToken = user.token;
      // sessionStorage에 "userToken"이라는 키로 JWT 토큰을 저장함.
      sessionStorage.setItem("userToken", jwtToken);
      // dispatch 함수를 이용해 로그인 성공 상태로 만듦.
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });

      // 기본 페이지로 이동함.
      navigate(ROUTE.Home.link, { replace: true });
    } catch (err) {
      console.log('err', err.response.data.message)
      // 에러메세지 출력
      alert(err.response.data)
    }
  };

  return (
    <Container>
      <TitleContainer>
        <img src={logo} alt='EVoyageJeju Logo' />
        <Link to={ROUTE.Home.link}>탐라는차다</Link>
      </TitleContainer>
      <FormContainer onSubmit={handleSubmit}>
        <legend>🌐로그인</legend>
        <FormFieldset>
          <label>ID</label>
          <input 
            name="id" 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
          {!isIDVaild(id) && (
            <p>아이디를 입력해주십시오.</p>
          )}
        </FormFieldset>
        <FormFieldset>
          <label>Password</label>
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
        <ButtonContainer>
          <FormButton 
            type="submit" 
            disabled={!isFormValid}
          >
            LOGIN
          </FormButton>
        </ButtonContainer>
        <AlreadySignUpText>
          <Link to={ROUTE.Home.link}>Just Searching.</Link>
          <Link to={ROUTE.REGISTER.link}>No account yet? Sign Up First.</Link>
        </AlreadySignUpText>
      </FormContainer>
    </Container>
  );
}

export default LoginForm;