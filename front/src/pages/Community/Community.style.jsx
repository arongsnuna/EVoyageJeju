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

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 110%;
    text-align: center;
    color: #21272A;
  }
`;

export const TypeContainer =  styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 2316px;
    border-bottom: 3px solid #DDE1E6;
  }
`;

export const TypeButton = styled.button`
  cursor: pointer;
  padding: 40px 85px;
  border: none;
  background: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: ${(props) => props.fontColor};

  &:hover {
    background: #A6C8FF;
  }
`;

export const IndexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 550;
  font-size: 26px;
  line-height: 110%;
  color: #121619;

  div {
    display: flex;
    flex-direction: row;
    background: #F2F4F8;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 1px solid #DDE1E6;
    }

    .index { width: 150px; }

    .title { width: 1200px;}

    .author { width: 400px; }

    .date { width: 400px; }

    .likeCount { width: 150px; }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 26px;
  line-height: 110%;
  color: #121619;

  div > div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 1px solid #DDE1E6;
    }

    .index { width: 150px; }
    .title { width: 1200px;}
    .author { width: 400px; }
    .date { width: 400px; }
    .likeCount { width: 150px; }
  }
`;

export const ButtonContainer = styled.div`
  
`;