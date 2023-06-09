import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../../UserContext";
import { Ul, Li } from "./MypageDropDown.style";

function MypageDropDown() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT"});
    alert("로그아웃 되었습니다.")
    navigate('/')
  }
  
  return (
    <Ul>
      <Li><button onClick={() => navigate("/mypage")}>마이페이지</button></Li>
      <Li><button onClick={logout}>로그아웃</button></Li>
    </Ul>
  );
}

export default MypageDropDown;