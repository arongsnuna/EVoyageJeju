import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { isIDVaild, isPasswordValid } from '../../../utils/util';
import { TitleContainer, FormContainer, FormFieldset, ButtonContainer, FormButton, AlreadySignUpText } from './LoginForm.style';

import logo from '../logo.png'

function LoginForm() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 입력값에 대한 유효성 검사
  const isFormValid = isIDVaild(id) && isPasswordValid(password);

  // // 로그인 handlesubmit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     await Api.get(~~~)
  //   } catch (err) {
  //     
  //   }
  // }

  return (
    <>
      <TitleContainer>
        <img src={logo} alt='EVoyageJeju Logo' />
        <a href='/'>탐라는차다</a>
      </TitleContainer>
      {/* <form onSubmit={handleSubmit}> */}
      <FormContainer>
        <legend>로그인</legend>
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
            fontColor='#FFFFFF'
            backgroundColor='#3563E9'
            type="submit" 
            onClick={() => navigate('/')}
            disabled={!isFormValid}
          >
            LOGIN
          </FormButton>
          <FormButton 
            fontColor='#3563E9'
            backgroundColor='#FFFFFF'
            type="submit" 
          >
            Log in with Google
          </FormButton>
        </ButtonContainer>
        <AlreadySignUpText>
          <a href='/'>Just Searching.</a>
          <a href='/register'>No account yet? Sign Up First.</a>
        </AlreadySignUpText>
      </FormContainer>
    </>
  );
}

export default LoginForm;