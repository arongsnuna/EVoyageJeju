import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import logo from './logo.png'

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 형태 확인하는 함수
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // 입력값에 대한 validate
  const isEmailVaild = validateEmail(email);
  const isPasswordValid = password.length >= 4;

  const isFormValid = isEmailVaild && isPasswordValid;

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
      <div>
        <img src={logo} alt='EVoyageJeju Logo' />
        <p>탐라는 차다</p>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <h1>로그인</h1>
      <form>
        <div>
          <p>이메일</p>
          <input 
            name="email" 
            type="email" 
            placeholder="example@EVoyageJeju.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {!isEmailVaild && (
            <p style={{color: '#FD0918'}}>이메일 형식이 올바르지 않습니다.</p>
          )}
        </div>
        <div>
          <p>비밀번호</p>
          <input 
            name="password" 
            type="password" 
            placeholder="********" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {!isPasswordValid && (
            <p style={{color: '#FD0918'}}>4글자 이상 작성해주십시오.</p>
          )}
        </div>
        <div>
          <button 
            type="submit" 
            onClick={() => navigate('/')}
            disabled={!isFormValid}
          >
            확인
          </button>
        </div>
        <div>
          <button 
            type="submit" 
          >
            구글 연동하기
          </button>
        </div>
      </form>
      <div>
        <a href='/register'>
          No account yet? Sign Up First.
        </a>
      </div>
    </>
  );
}

export default LoginForm;