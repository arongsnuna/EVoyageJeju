import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import { Container } from "./Footer.style";

function Footer() {
  const navigatie = useNavigate();

  if (window.location.pathname === ROUTE.LOGIN.link) {
    return (
      <></>
    )
  } else if (window.location.pathname === ROUTE.REGISTER.link) {
    return (
      <></>
    )
  };
  
  return (
    <Container>
      <p>Copyright 2023. EVoyageJeju. All rights reserved.</p>
    </Container>
  )
}

export default Footer;

