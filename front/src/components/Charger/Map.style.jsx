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
    font-size: 70px;
    color: grey;
  }
`;

export const CurrentPositionButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 70px 20px;
  border: none;

  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #FFFFFF;

  background: #3563e9;
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

  width: 500px;
  height: 47px;

  font-family: 'Inter';
  font-style: normal;
  font-size: 20px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
`;

export const SearchFormButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 70px 20px;

  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #3563e9;

  background: #FFFFFF;
  border-radius: 5px;
  border-color: #3563e9;

  &:active {
    position: relative;
    top: 3px;
  }
`;