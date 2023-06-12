import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { useUserState } from "../../UserContext";

import MypageDropDown from "../MyPage/MypageDropDown";
import logo from "./logo.png";
import mypagelogo from "./mypagelogo.png";

import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "2px solid #dde1e6",
  position: "fixed",
  width: "100%",
  height: "150px",
  left: 0,
  top: 0,
  background: "#ffffff",
  zIndex: 1000,
  padding: theme.spacing(0, 15),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0, 3),
}));

const Logo = styled("img")({
  width: "57px",
  height: "57px",
});

const Title = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "29px",
  display: "flex",
  alignItems: "center",
  letterSpacing: "0.2px",
  color: "#000000",
}));

// Style for Mypage logo
const MypageLogo = styled(Logo)({
  cursor: "pointer",
});

function Header() {
  const { user } = useUserState();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [click, setClick] = useState(false);

  if (window.location.pathname === ROUTE.LOGIN.link) {
    return <></>;
  } else if (window.location.pathname === ROUTE.REGISTER.link) {
    return <></>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <Logo src={logo} alt="EVoyageJeju Logo" />
          <Title to="/">탐라는차다</Title>
        </TitleContainer>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            paddingRight: "200px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "100px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="홈"
                  component={Link}
                  to="/"
                  sx={{ height: "100%", fontSize: "20px" }}
                />
                <Tab
                  label="정보"
                  component={Link}
                  to="/envposting"
                  sx={{ height: "100%", fontSize: "20px" }}
                />
                <Tab
                  label="커뮤니티"
                  component={Link}
                  to="/community"
                  sx={{ height: "100%", fontSize: "20px" }}
                />
                <Tab
                  label="가까운 충전소 찾기"
                  component={Link}
                  to="/charger"
                  sx={{ height: "100%", fontSize: "20px" }}
                />
              </Tabs>
            </Box>
            {user ? (
              <>
                <Typography variant="h6">
                  🍊{user.userNickname}님 반갑습니다🚜
                </Typography>
                <MypageLogo
                  src={mypagelogo}
                  alt="Login user"
                  onClick={() => setClick(!click)}
                />
                {click && <MypageDropDown />}
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/register")}
                >
                  SignUp
                </Button>
                <Button variant="outlined" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Header;
