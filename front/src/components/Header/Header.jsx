import { useNavigate, Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import {
  Container,
  TitleContainer,
  Navigation,
  NavContainer,
  ButtonContainer,
  HeaderButton,
} from "./Header.style";

import logo from "./logo.png";

function Header() {
  const navigate = useNavigate();

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
          <a href="/">탐라는차다</a>
        </TitleContainer>

        <Navigation>
          <NavContainer>
            <Link to="/" exact="true">
              홈
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to="/envposting" exact="true">
              정보
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to="/community" exact="true">
              커뮤니티
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to="/charger" exac="true">
              가까운 충전소 찾기
            </Link>
          </NavContainer>
        </Navigation>

        <ButtonContainer>
          <button onClick={() => navigate("/mypage")}>마이페이지</button>
          <HeaderButton
            fontColor="#3563e9"
            backgroundColor="#FFFFFF"
            onClick={() => navigate("/register")}
          >
            SignUp
          </HeaderButton>
          <HeaderButton
            fontColor="#FFFFFF"
            backgroundColor="#3563e9"
            onClick={() => navigate("/login")}
          >
            Login
          </HeaderButton>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Header;
