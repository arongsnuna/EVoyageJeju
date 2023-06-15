import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 300px;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 40px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 2300px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 110%;
    color: #000000;
  }

  .title-box {
    background: #f2f2f2;
    border-top: 1px solid #00000033;
    border-bottom: 1px solid #00000033;
    div {
      padding-left: 80px;
      width: 100%;
      height: 100px;

      font-weight: 700;
      font-size: 32px;
    }
  }

  .posting-infobox {
    border-bottom: 1px solid #00000033;
    div {
      justify-content: center;
      height: 60px;
      text-align: center;
    }
    .index {
      width: 150px;
    }
    .type {
      width: 200px;
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
    .info {
      width: 200px;
      background: #f2f2f2;
    }
  }

  .content-box {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #00000033;
    div {
      align-items: start;
      padding: 40px;
      background: #f9f8f3;
      width: 2220px;
    }
    .content {
      padding-bottom: 300px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 100px 380px 40px;

  div {
    display: flex;
    justify-content: flex-end;

    width: 100%;

    button {
      width: 150px;
      height: 50px;

      margin-left: 15px;
      border: 1px solid #3563e9;
      border-radius: 5px;
      background: #ffffff;

      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #3563e9;

      &:hover {
        background: #3563e9;
        color: #ffffff;
      }

      &:active {
        position: relative;
        top: 2px;
      }
    }

    .tolist {
      border: 1px solid #15be51;
      background: #ffffff;
      color: #15be51;

      &:hover {
        background: #15be51;
        color: #ffffff;
      }
    }

    .delete {
      border: 1px solid #ffd229;
      background: #ffffff;
      color: #ffd229;

      &:hover {
        background: #ffd229;
        color: #ffffff;
      }
    }

    .like {
      border: 1px solid #f91c1c;
      background: #ffffff;
      color: #f91c1c;

      &:hover {
        background: #f91c1c;
        color: #ffffff;
      }
    }

    .liked {
      border: 1px solid #f91c1c;
      background: #f91c1c;
      color: #ffffff;

      &:hover {
        background: #ffffff;
        color: #f91c1c;
      }
    }
  }
`;
