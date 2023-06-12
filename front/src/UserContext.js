import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import * as Api from './utils/api';
import { loginReducer } from "./reducer/reducer";
import { LOGIN_SUCCESS } from "./reducer/action";

const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(loginReducer, {
    userList: [],
    user: null,
  });

  const [isFetching, setIsFetching] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 회원가입한 내역(토근 발급 내역)이 있다면, 이를 통해 유저 정보 가져오기
      const res = await Api.get("current");
      const currentUser = res.data;
      // dispatch 함수를 통해 로그인 성공 상태로 변환
      dispatch({
        type: LOGIN_SUCCESS,
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
    setIsFetching(true);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetching) {
    return 'loading...'
  };

  return (
    <UserStateContext.Provider value={userState}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );  
};

export const useUserState = () => {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find UserProvider");
  return state;
};

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find UserDispatchProvider");
  return dispatch;
};