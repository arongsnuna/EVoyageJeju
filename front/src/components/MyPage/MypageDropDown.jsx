import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../../UserContext";
import { Ul, Li } from "./MypageDropDown.style";
import { ROUTE } from "../../routes";
import { LOGOUT } from "../../reducer/action";

function MypageDropDown() {
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const logout = () => {
    sessionStorage.removeItem("userToken");
    dispatch({ type: LOGOUT });
    alert("로그아웃 되었습니다.");
    navigate(ROUTE.Home.link);
  };

  return (
    <Ul>
      <Li>
        <button onClick={() => navigate(ROUTE.MYPAGE.link)}>마이페이지</button>
      </Li>
      <Li>
        <button onClick={logout}>로그아웃</button>
      </Li>
    </Ul>
  );
}

export default MypageDropDown;
