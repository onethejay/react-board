import React, { useEffect, useState } from 'react';

/*
{
  block,
  endPage,
  nextBlock,
  page,
  pageSize,
  prevBlock,
  startIndex,
  startPage,
  totalBlockCnt,
  totalListCnt,
  totalPageCnt,
}
 */
const Pagination = ({ pagination }) => {
  const [pages, setPages] = useState([]);

  const {
    block,
    endPage,
    nextBlock,
    page,
    pageSize,
    prevBlock,
    startIndex,
    startPage,
    totalBlockCnt,
    totalListCnt,
    totalPageCnt,
  } = pagination;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const onClick = (event) => {
    console.log(event.target.value);
  };

  return (
    <div style={{ paddingTop: 5, paddingBottom: 10 }}>
      {pages.map((page, index) => (
        <button key={index} onClick={onClick} value={page}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
