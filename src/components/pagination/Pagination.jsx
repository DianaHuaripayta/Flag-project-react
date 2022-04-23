import * as React from 'react';
import {
  PaginationStyled, 
  PageNumbersStyled, 
  ReadMoreStyled, 
  LiStyled, 
  BoxIconStyled,
  IconNextStyled,
  IconLeftStyled,
  BoxNumberStyled
} from './paginationStyled'
function ComponentPagination(props) {
const [pageNumberLimit, setpageNumberLimit] = React.useState(5);
const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);
const handleLoadMore = () => {
  props.setitemsPerPage(props.itemsPerPage + 5);
}

const handlePrevin = () => {
  props.setcurrentPage(props.currentPage - 1);

  if ((props.currentPage - 1) % pageNumberLimit === 0) {
    setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
};

const handleNextbtn = () => {
  props.setcurrentPage(props.currentPage + 1);

  if (props.currentPage + 1 > maxPageNumberLimit) {
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
};

let pageIncrementBtn = null;
if (props.pages.length > maxPageNumberLimit) {
  pageIncrementBtn = <li onClick={handleNextbtn} className='points'>&hellip; </li>;
}

let pageDecrementBtn = null;
if (minPageNumberLimit >= 1) {
  pageDecrementBtn = <li onClick={handlePrevin} className='points'> &hellip; </li>;
}


const handleClick = (e) => {
  props.setcurrentPage(Number( e.currentTarget.id));
};

const renderPageNumbers = props.pages.map((number) => {
  if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
    return (
      <LiStyled
        key={number.toString()}
        id={number}
        onClick={handleClick}
        className={props.currentPage === number ? 'active' : null}
      >
        <div>
          {number}
        {console.log(number)}
        </div>
        
      </LiStyled>
    );
  } else {
    return null;
  }
});

  return (
  <>
  <PaginationStyled>
    <PageNumbersStyled>
      <BoxIconStyled
      onClick={handlePrevin}
      disabled={props.currentPage === props.pages[0] ? true : false}>
        <IconLeftStyled/>
      </BoxIconStyled>

      
      <BoxNumberStyled>
        {pageDecrementBtn}{/* points */}
        {renderPageNumbers}{/* numbers */}

        {pageIncrementBtn}{/* points */}
      </BoxNumberStyled>
      
      

      <BoxIconStyled
      onClick={handleNextbtn}
      disabled={props.currentPage === props.pages[props.pages.length - 1] ? true : false}
      >
        <IconNextStyled/>
      </BoxIconStyled>

    </PageNumbersStyled>
    <ReadMoreStyled onClick={handleLoadMore}>
      Load More
    </ReadMoreStyled>
  </PaginationStyled>
 
  </>
  );
}
export default ComponentPagination


