import React from "react";
import Pagination from "react-js-pagination";
import { PaginationContainer, PaginationList } from "./Paging.style";

const Paging = ({ page, count, setPage }) => {
  console.log("Paging page: ", page);
  console.log("Paging count: ", count);
  console.log("Paging setPage: ", setPage);
  return (
    <PaginationContainer>
      <PaginationList>
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={count * 5}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setPage}
        />
      </PaginationList>
    </PaginationContainer>
  );
};

export default Paging;
