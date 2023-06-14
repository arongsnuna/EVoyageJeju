import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 800px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 230px;

  p {
    padding: 0 30px 35px;
    width: 2300px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 110%;
    text-align: center;
    color: #21272a;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 2316px;
    border-bottom: 3px solid #dde1e6;
  }
`;

export const TypeButton = styled.button`
  cursor: pointer;
  padding: 40px 85px;
  border: none;
  background: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: ${(props) => props.fontColor};

  &:hover {
    background: #a6c8ff;
  }
`;

export const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 550;
  font-size: 26px;
  line-height: 110%;
  color: #121619;

  div {
    display: flex;
    flex-direction: row;
    background: #f2f4f8;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 1px solid #dde1e6;
    }

    .index {
      width: 150px;
    }
    .title {
      width: 1200px;
    }
    .author {
      width: 400px;
    }
    .date {
      width: 400px;
    }
    .likeCount {
      width: 150px;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: "Roboto";
  font-style: normal;
  font-size: 26px;
  line-height: 110%;
  color: #21272a;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    p,
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 1px solid #dde1e6;

      text-decoration: none;
      color: #21272a;

      &:active {
        position: relative;
        top: 2px;
      }
    }

    .index {
      width: 150px;
    }
    .title {
      width: 1200px;
    }
    .author {
      width: 400px;
    }
    .date {
      width: 400px;
    }
    .likeCount {
      width: 150px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: flex-end;
    margin: 40px 0;

    width: 2316px;

    button {
      width: 150px;
      height: 50px;

      border: none;
      border-radius: 5px;
      background: #3563e9;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #ffffff;

      &:active {
        position: relative;
        top: 3px;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0; // 상하 여백 조정

  select,
  input {
    margin: 0 10px; // 좌우 여백 조정
    padding: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background: #3563e9;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;

    &:active {
      position: relative;
      top: 2px;
    }
  }
`;
