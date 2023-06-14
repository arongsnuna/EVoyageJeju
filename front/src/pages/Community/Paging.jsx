import React, { useState } from "react";
import Pagination from "react-js-pagination";
import {
  PaginationContainer,
  PaginationList,
  PageSelection,
} from "./Paging.style";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <PaginationContainer>
      <PaginationList>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </PaginationList>
    </PaginationContainer>
  );
};

export default Paging;
