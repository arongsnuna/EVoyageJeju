import { useNavigate, NavLink } from 'react-router-dom';

import logo from './logo.png'
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();

  if (window.location.pathname === '/login') return null;
  else if (window.location.pathname === '/register') return null;
  
  return (
    <>
      <Container>
        <TitleContainer>
          <img src={logo} alt='EVoyageJeju Logo' />
          <p>탐라는 차다</p>
        </TitleContainer>

        <Navigation>
          <NavContainer>
            <NavLink exact to='/' activeClassName='active'>
              홈
            </NavLink>
          </NavContainer>
          <NavContainer>
            <NavLink exact to='/info' activeClassName='active'>
              정보
            </NavLink>
          </NavContainer>
          <NavContainer>
            <NavLink exact to='/community' activeClassName='active'>
              커뮤니티
            </NavLink>
          </NavContainer>
          <NavContainer>
            <NavLink exact to='/charger' activeClassName='active'>
              가까운 충전소 찾기
            </NavLink>
          </NavContainer>
        </Navigation>

        <ButtonContainer>
          <HeaderButton 
            color='#3563e9'
            backgroundColor='#FFFFFF'
            onClick={() => navigate("/register")}
          >
            SignUp
          </HeaderButton>
          <HeaderButton
            color='#FFFFFF'
            backgroundColor='#3563e9'
            onClick={() => navigate("/login")}
          >
            Login
          </HeaderButton>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default Header;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  position: absolute;
  width: 100%;
  height: 103px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: inset 0px -1px 1px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 57px;
    height: 57px;
    padding-top: 22px;
    padding-left: 100px;
  }

  p {
    width: 137px;
    height: 51px;
    padding-left: 30px;
  
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
  
    color: #000000;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;

  width: 50%;
  height: 100%;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: red;
  }

  a {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 19px;
    letter-spacing: 0.2px;
    text-decoration-line: none;

    color: #424242;
  }
  
  .active {
    color: #3563E9;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 120px;
  padding: 8px 22px;
  gap: 10px;
`;

const HeaderButton = styled.button`
  width: 100px;
  height: 45px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: ${(props) => props.color};

  background: ${(props) => props.backgroundColor};
  border-radius: 5px;
  border-color: #3563e9;
`;