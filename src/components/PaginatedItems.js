import ReactPaginate from 'react-paginate';
import React, { useState, useEffect, useContext  } from "react";
import { PicContext } from '../App';
import DisplayResult from "./DisplayResult";

export default function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const { pics, setPics } = useContext(PicContext);

    console.log(pics);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(pics.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(pics.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % pics.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={9}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />

        <DisplayResult pics = {pics}/> 
      </>
    );
  }
  