import { Link } from "react-router-dom";
import { ROUTE } from "../routes";
import { Container } from "./Footer.style";

function Footer() {

  if (window.location.pathname === '/login') {
    return (
      <Link to={ROUTE.LOGIN.link}></Link>
    )
  } else if (window.location.pathname === '/register') {
    return (
      <Link to={ROUTE.REGISTER.link}></Link>
    )
  };
  
  return (
    <Container>
      <p>Copyright 2023. EVoyageJeju. All rights reserved.</p>
    </Container>
  )
}

export default Footer;

