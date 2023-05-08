import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const BoardList = () => {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState([]);
  const [pageList, setPageList] = useState([]);

  const [curPage, setCurPage] = useState(0); //현재 페이지 세팅
  const [prevBlock, setPrevBlock] = useState(0); //이전 페이지 블록
  const [nextBlock, setNextBlock] = useState(0); //다음 페이지 블록
  const [lastPage, setLastPage] = useState(0); //마지막 페이지

  const [search, setSearch] = useState({
    page: 1,
    sk: '',
    sv: '',
  });

  const getBoardList = async () => {
    if (search.page === curPage) return; //현재 페이지와 누른 페이지가 같으면 return

    const queryString = Object.entries(search)
      .map((e) => e.join('='))
      .join('&');

    const resp = await (
      await axios.get('//localhost:8080/board?' + queryString)
    ).data; // 2) 게시글 목록 데이터에 할당

    setBoardList(resp.data); // 3) boardList 변수에 할당
    const pngn = resp.pagination;

    const { endPage, nextBlock, prevBlock, startPage, totalPageCnt } = pngn;

    setCurPage(search.page);
    setPrevBlock(prevBlock);
    setNextBlock(nextBlock);
    setLastPage(totalPageCnt);

    const tmpPages = [];
    for (let i = startPage; i <= endPage; i++) {
      tmpPages.push(i);
    }

    setPageList(tmpPages);
  };

  const moveToWrite = () => {
    navigate('/write');
  };

  const onClick = (event) => {
    let value = event.target.value;
    setSearch({
      ...search,
      page: value,
    });

    getBoardList();
  };

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const onSearch = () => {
    if (search.sk !== '' && search.sv !== '') {
      setSearch({
        ...search,
        page: 1,
      });
      setCurPage(0);
      getBoardList();
    }
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, [search]);

  return (
    <div>
      <ul>
        {boardList.map((board) => (
          // 4) map 함수로 데이터 출력
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={onClick} value={1}>
          &lt;&lt;
        </button>
        <button onClick={onClick} value={prevBlock}>
          &lt;
        </button>
        {pageList.map((page, index) => (
          <button key={index} onClick={onClick} value={page}>
            {page}
          </button>
        ))}
        <button onClick={onClick} value={nextBlock}>
          &gt;
        </button>
        <button onClick={onClick} value={lastPage}>
          &gt;&gt;
        </button>
      </div>
      <br />
      <div>
        <select name="sk" onChange={onChange}>
          <option value="">-선택-</option>
          <option value="title">제목</option>
          <option value="contents">내용</option>
        </select>
        <input type="text" name="sv" id="" onChange={onChange} />
        <button onClick={onSearch}>검색</button>
      </div>
      <br />
      <div>
        <button onClick={moveToWrite}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardList;
