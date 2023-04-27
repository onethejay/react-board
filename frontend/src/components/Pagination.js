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

  useEffect(() => {
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }, [pagination]);
  return (
    <div style={{ paddingTop: 5, paddingBottom: 10 }}>
      {pages.map((value) => (
        <button key={value}>{value}</button>
      ))}
    </div>
  );
};

export default Pagination;
