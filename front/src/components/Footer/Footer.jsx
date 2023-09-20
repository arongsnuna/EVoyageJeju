  import { ROUTE } from "../../routes/routes";
import { Container } from "./Footer.style";

function Footer() {

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

