import styled from "styled-components";

export const Container = styled.div`
  margin: 170px 0 400px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;  
  margin: 200px 0 40px;

  p {
    padding: 100px 0 95px;
    width: 2922px;
    border-bottom: 10px dashed #218721;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 58px;
    text-align: center;
    letter-spacing: 0.2px;
    text-transform: capitalize;
    color: #212121;
  }
`;

export const TypeContainer =  styled.div`
  display: flex;
  justify-content: center;

  div {
    border-top-left-radius: 60px;
    border-top-right-radius: 55px;
    border-top: 50px dotted #4fc174;
    border-left: 1px solid #f9f8f7;
    border-right: 1px solid #f9f8f7;
    border-bottom: 1px solid #FDB551;

    width: 2316px;

    background: #f9f8f7;
  }
`;

export const TypeButton = styled.button`
  cursor: pointer;

  margin-top: 50px;
  padding: 40px 85px;
  border: none;
  border-top-left-radius: 60px;
  border-top-right-radius: 55px;
  
  background: none;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: #21272A;

  &:hover {
    background: #FFC87B;
    border: 1px solid #FDB551;
  }

  &:disabled {
    background: #FFC87B;
    color: #218721;
    border: 1px solid #FDB551;
  }
`;

export const AddButton = styled.button`
  margin-left: 1320px;
  margin-bottom: 20px;
  width: 170px;
  height: 70px;

  border: none;
  border-radius: 5px;
  background: #218721;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #FFFFFF;

  &:active {
    position: relative;
    top: 3px;
  }
`;

export const IndexContainer = styled.div`
  display: flex;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 550;
  font-size: 26px;
  line-height: 110%;
  color: #121619;

  div {
    display: flex;
    flex-direction: row;
    background: #FFC87B;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 3px solid #FDB551;
    }

    .index { width: 150px; }
    .title { width: 1000px;}
    .author { width: 400px; }
    .type { width: 200px; }
    .date { width: 400px; }
    .likeCount { width: 150px; }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 26px;
  line-height: 110%;
  color: #21272A;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #f9f8f7;

    p, a  {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      margin: 0;
      padding: 10px 0;
      border: 3px solid #FDB551;

      text-decoration: none;
      color: #21272A;

      &:active {
        position: relative;
        top: 2px;
      }
    }

    .index { width: 150px; }
    .title { width: 1000px;}
    .author { width: 400px; }
    .type { width: 200px; }
    .date { width: 400px; }
    .likeCount { width: 150px; }
  }
`;