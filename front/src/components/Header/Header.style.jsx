import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dde1e6;

  position: fixed;
  width: 100%;
  height: 150px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  z-index: 1000;
  padding: 0 120px;
`;

export const TitleContainer = styled.div`
  display: fixed;
  align-items: center;

  img {
    width: 57px;
    height: 57px;
    margin-right: 30px;
  }

  a {
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
  display: fixed;
  justify-content: space-between;
  width: 50%;
`;

export const NavContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  text-decoration-line: none;
  color: #424242;

  &:hover {
    color: #3563e9;
  }

  a {
    color: inherit;
    text-decoration: none;
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
