import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Container>
        <div>
          <Logo src={logo} alt='EVoyageJeju Logo' /> {/* 로고 !*/}
          <Title>탐라는 차다</Title>
        </div>

        <Navigation>
          <GnbLists>
            <GnbItem>
              <NavLink exact to='/' activeClassName='active'>
                홈
              </NavLink>
            </GnbItem>
            <GnbItem>
              <NavLink exact to='/info' activeClassName='active'>
                정보
              </NavLink>
            </GnbItem>
            <GnbItem>
              <NavLink exact to='/community' activeClassName='active'>
                커뮤니티
              </NavLink>
            </GnbItem>
            <GnbItem>
              <NavLink exact to='/charger' activeClassName='active'>
                가까운 충전소 찾기
              </NavLink>
            </GnbItem>
          </GnbLists>
        </Navigation>
        <ButtonContainer>
          <SignUp>SignUp</SignUp>
          <Login>Login</Login>
        </ButtonContainer>
      </Container>
    </>
  )
}

export default Header;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  padding: 22px 120px;

  position: fixed;
  width: 100%;
  height: 103px;
  left: 0px;
  top: 0px;
  max-wi

  background: #FFFFFF;
  box-shadow: inset 0px -1px 1px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  position: absolute;
  width: 57px;
  height: 57px;
  left: 100px;
  top: 45px;
`;

const Title = styled.p`
  position: absolute;
  width: 137px;
  height: 51px;
  left: 187px;
  top: 28px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  color: #000000;
`;

const Navigation = styled.nav`

`;

const GnbLists = styled.ul`
  list-style: none;
`;

const GnbItem = styled.li`
a {
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
  padding: 8px 22px;
  gap: 10px;
`;

const SignUp = styled.button`
  width: 89px;
  height: 35px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #3563e9;

  background: #FFFFFF;
  border-radius: 5px;
  border-color: #3563e9;
`;

const Login = styled.button`
  width: 89px;
  height: 35px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #FFFFFF;

  background: #3563E9;
  border-radius: 5px;
  border-color: #3563e9;
`;