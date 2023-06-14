import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const PaginationList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex; // 이 부분을 변경합니다
  flex-direction: row; // 이 부분을 추가합니다

  li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }

    &.active {
      background-color: #337ab7;

      a {
        color: white;
      }
    }

    a {
      text-decoration: none;
      color: #337ab7;
      font-size: 1rem;

      &:hover,
      &.active {
        color: blue;
      }
    }
  }
`;

export const PageSelection = styled.div`
  width: 48px;
  height: 30px;
  color: #337ab7;
`;
