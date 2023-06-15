import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import {
  Container,
  TitleContainer,
  Navigation,
  NavContainer,
  ButtonContainer,
  HeaderButton,
} from "./Header.style";
import { useUserState } from "../../UserContext";

import MypageDropDown from "../MyPage/MypageDropDown";
import logo from "./logo.png";
import mypagelogo from "./mypagelogo.png";

function Header() {
  const { user } = useUserState();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  console.log(click);

  if (window.location.pathname === ROUTE.LOGIN.link) {
    return <></>;
  } else if (window.location.pathname === ROUTE.REGISTER.link) {
    return <></>;
  }

  return (
    <>
      <Container>
        <TitleContainer>
          <img src={logo} alt="EVoyageJeju Logo" />
          <Link to={ROUTE.Home.link}>탐라는차다</Link>
        </TitleContainer>

        <Navigation>
          <NavContainer>
            <Link to={ROUTE.Home.link} exact="true">
              홈
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to={ROUTE.ENVINFO.link} exact="true">
              정보
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to={ROUTE.COMMUNITY.link} exact="true">
              커뮤니티
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to={ROUTE.CHARGER.link} exac="true">
              가까운 충전소 찾기
            </Link>
          </NavContainer>
        </Navigation>

        <ButtonContainer>
          {user ? (
            <>
              <div className="profile">
                <p>{user.userNickname}님 반갑습니다!</p>
                <div className="profilebox">
                  <img
                    src={user.userImage ? user.userImage : mypagelogo}
                    alt="Login user"
                    onClick={() => setClick(!click)}
                  />
                </div>
              </div>
              {click && <MypageDropDown />}
            </>
          ) : (
            <>
              <HeaderButton
                fontColor="#218721"
                backgroundColor="#FFFFFF"
                onClick={() => navigate(ROUTE.REGISTER.link)}
              >
                SignUp
              </HeaderButton>
              <HeaderButton
                fontColor="#FFFFFF"
                backgroundColor="#218721"
                onClick={() => navigate(ROUTE.LOGIN.link)}
              >
                Login
              </HeaderButton>
            </>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Header;
