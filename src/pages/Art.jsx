import React, { useContext, useState } from "react";
import { DataContext } from "../Components/context/DataContext";
import Item from "../Components/Item";
import { v4 as uuidv4 } from "uuid";
import ReactPaginate from "react-paginate";

export default function Art() {
  const { fetched } = useContext(DataContext);
  const [pageNumber, setPageNumber] = useState(0);

  const filtered = fetched.filter((item) => {
    return item.section === "Art";
  });

  const itemsPerPage = 6;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = filtered
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => {
      return <Item key={uuidv4()} item={item} />;
    });

  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div id="art">
      <div className="item-container">{displayItems}</div>
      <ReactPaginate 
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination-container"}
          previousLinkClassName={"previous-btn"}
          nextLinkClassName={"next-btn"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
    </div>
  );
}
