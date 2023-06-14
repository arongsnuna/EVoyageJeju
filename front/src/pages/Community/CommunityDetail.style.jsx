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

    font-family: 'Roboto';
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
      width: 16.67%;
      text-align: center;
    }

    .info {
      background: #f2f2f2;
    }
  }

  .content-box {
    border-bottom: 1px solid #00000033;
    div {
      align-items: start;
      padding: 40px 30px;

      width: 100%;
      height: 800px;
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
      border: 1px solid #3563E9;
      border-radius: 5px;
      background: #FFFFFF;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.46px;
      color: #3563E9;

      &:hover {
        background: #3563E9;
        color: #FFFFFF;
      }

      &:active {
        position: relative;
        top: 2px;
      }
    }

    .delete {
      border: 1px solid #FC1010;
      background: #FFFFFF;
      color: #FC1010;
      
      &:hover {
        background: #FC1010;
        color: #FFFFFF;
      }
    }

    .like {
      border: 1px solid #FCCE10;
      background: #FFFFFF;
      color: #FCCE10;
      
      &:hover {
        background: #FCCE10;
        color: #FFFFFF;
      }
    }
    
    .tolist {
      border: 1px solid #15BE51;
      background: #FFFFFF;
      color: #15BE51;
  
      &:hover {
        background: #15BE51;
        color: #FFFFFF;
      }
    }
  }
`;