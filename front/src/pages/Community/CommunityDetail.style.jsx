import styled from "styled-components";

export const Container = styled.div`
  margin: 150px 0 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;

  p {
    display: flex;
    justify-content: flex-start;

    padding: 100px 30px 35px 150px;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 2300px;
    background: #f9f8f7;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 110%;
    color: #000000;
  }

  .title-box {
    background: #f9f8f7;
    border-bottom: 1px solid #FDB551;
    div {
      padding-left: 80px;
      width: 100%;
      height: 100px;
      background: #FFC87B;

      font-weight: 600;
      font-size: 36px;
    }
  }

  .posting-infobox {
    margin-top: 0;
    border-bottom: 1px solid #FDB551;
    div {
      justify-content: center;
      height: 60px;
      text-align: center;
    }
    .index { width: 150px; }
    .type { width: 200px; }
    .author { width: 400px; }
    .date { width: 400px; }
    .likeCount { width: 150px; }
    .info { 
      width: 200px;
      background: #FFC87B; 
    }
  }

  .content-box {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #FDB551;
    div {
      align-items: start;
      padding: 40px;
      background: #F9F8F3;
      width: 2220px;
    }
    .content {
      padding-bottom: 300px;
    }
  }

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 40px;

  div {
    display: flex;
    justify-content: flex-end;

    width: 2300px;

    button {
      cursor: pointer;

      width: 150px;
      height: 50px;

      margin-left: 15px;
      border: 1px solid #3563E9;
      border-radius: 5px;
      background: #3563E9;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #FFFFFF;

      &:hover {
        border: 1px solid #1D3B97;
        background: #1D3B97;
        color: #FFFFFF;
      }

      &:active {
        position: relative;
        top: 2px;
      }
    }
    
    .tolist {
      border: 1px solid #9C0FFC;
      background: #9C0FFC;
      color: #FFFFFF;
  
      &:hover {
        border: 1px solid #59247E;
        background: #59247E;
        color: #FFFFFF;
      }
    }
    
    .delete {
      border: 1px solid #FFD229;
      background: #FFD229;
      color: #FFFFFF;
      
      &:hover {
        border: 1px solid #C7A320;
        background: #C7A320;
        color: #FFFFFF;
      }
    }

    .like {
      border: 1px solid #F91C1C;
      background: #F91C1C;
      color: #FFFFFF;
      
      &:hover {
        border: 1px solid #840E0E;
        background: #840E0E;
        color: #FFFFFF;
      }
    }

    .liked {
      border: 1px solid #840E0E;
      background: #840E0E;
      color: #FFFFFF;
      
      &:hover {
        border: 1px solid #F91C1C;
        background: #F91C1C;
        color: #FFFFFF;
      }
    }
  }
`;