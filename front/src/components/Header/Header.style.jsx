import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  border-bottom: 2px solid #dde1e6;

  position: fixed;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  z-index: 1000;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 57px;
    height: 57px;
    padding-top: 45px;
    padding-left: 120px;
  }

  a {
    margin-top: 48px;
    width: 220px;
    height: 51px;
    padding-left: 30px;
    text-decoration: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;

    color: #000000;

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;

  width: 50%;
  height: 100%;
`;

export const NavContainer = styled.div`
  width: 100%;

  &:hover {
    background: #a6c8ff;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 19px;
    letter-spacing: 0.2px;
    text-decoration-line: none;

    color: #424242;

    &:hover {
      color: #3563e9;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  margin-right: 120px;
  padding: 38px 22px;
  gap: 10px;

  width: 450px;
  height: 75px;

  p {
    margin-right: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
  }

  img {
    width: 75px;
    height: 75px;
    cursor: pointer;

    &:active {
      position: relative;
      top: 3px;
    }
  }
`;

export const HeaderButton = styled.button`
  cursor: pointer;

  width: 130px;
  height: 50px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: ${(props) => props.fontColor};

  background: ${(props) => props.backgroundColor};
  border-radius: 5px;
  border-color: #3563e9;

  &:active {
    position: relative;
    top: 3px;
  }
`;
