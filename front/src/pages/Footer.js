import styled from 'styled-components';

function Footer() {

  if (window.location.pathname === '/login') return null;
  else if (window.location.pathname === '/register') return null;
  
  return (
    <Container>
      <p>Copyright 2023. EVoyageJeju. All rights reserved.</p>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;

  position: relative;
  width: 100%;
  height: 75px;
  transform: translateY(-100%);
  
  background: #3563E9;

  p {
    padding: 24px 80px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #FFFFFF;
    text-align: center;
  } 
`;