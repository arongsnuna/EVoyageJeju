import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import logo from './logo.png'

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
  const isPasswordSame = password === confirmPassword;
  const isNameValid = name.length >= 2;
  const isNickNameValid = nickname.length >= 2;

  const isFormValid = isEmailVaild && isPasswordValid && isPasswordSame && isNameValid && isNickNameValid;

  // // 회원가입 handlesubmit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     await Api.post(~~~)
  //   } catch (err) {
  //     닉네임, 이메일 중복검사해야지
  //   }
  // }

  return (
    <>
      <div>
        <img src={logo} alt='EVoyageJeju Logo' />
        <p>탐라는 차다</p>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <h1>회원가입</h1>
      <form>
        <div>
          <p>이름</p>
          <input 
            name="name" 
            type="text" 
            placeholder="제주도" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          {!isNameValid && (
            <p style={{color: '#FD0918'}}>2글자 이상 작성해주십시오.</p>
          )}
        </div>
        <div>
          <p>별명</p>
          <input 
            name="name" 
            type="text" 
            placeholder="돌하르방" 
            value={nickname}
            onChange={(e) => setNickName(e.target.value)} 
          />
          {!isNickNameValid && (
            <p style={{color: '#FD0918'}}>2글자 이상 작성해주십시오.</p>
          )}
        </div>
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
          <p>비밀번호 확인</p>
          <input 
            name="confirmPassword" 
            type="password" 
            placeholder="********" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          {!isPasswordSame && (
            <p style={{color: '#FD0918'}}>비밀번호가 일치하지 않습니다.</p>
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
        <a href='/login'>
          Already have an accout?
        </a>
      </div>
    </>
  );
}

export default RegisterForm;