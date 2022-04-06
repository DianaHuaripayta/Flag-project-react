import * as React from 'react';
interface Items {
  setcurrentPage: Number|{};
  setitemsPerPage: Number|any;
  itemsPerPage: number;//number con n minuscula significa qu es de tipo primitivo
} 
function Pagination(props: Items) {
const handleLoadMore = () => {
  props.setitemsPerPage(props.itemsPerPage + 5);
}

  return (
    <>
      <button onClick={handleLoadMore} >
        Load More
      </button>
    </>
  );
}
export default Pagination


