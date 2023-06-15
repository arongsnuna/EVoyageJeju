import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;

  p {
    margin: 40px 70px 25px;
    font-size: 80px;
    color: #218721;
  }
`;

export const CurrentPositionButton = styled.button`
  width: 220px;
  height: 70px;
  margin: 70px 20px;
  border: none;

  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #FFFFFF;

  background: #FDA62D;
  border-radius: 5px;

  &:active {
    position: relative;
    top: 3px;
  }
`;

export const MapComp = styled.div`
  width: 100%;
  height: 1000px;
`;

export const SearchFormInput = styled.input`
  margin: 70px 0 70px 20px;
  border-radius: 5px;
  border: 1px solid F7950F;


  width: 500px;
  height: 65px;

  font-family: 'Inter';
  font-style: normal;
  font-size: 28px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
`;

export const SearchFormButton = styled.button`
  width: 220px;
  height: 70px;
  margin: 70px 20px;
  border: none;

  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #FFFFFF;

  background: #FDA62D;
  border-radius: 5px;

  &:active {
    position: relative;
    top: 3px;
  }
`;