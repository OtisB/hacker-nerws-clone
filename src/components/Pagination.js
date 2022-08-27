import React from 'react'

function Pagination(
  { isPending,
    error,
    maxPage,
    page,
    setPage,
  }) {

  const handleClickPrev = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  const handleClickNext = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className='pagination'>
      <button disabled={isPending || error || page === 0} onClick={handleClickPrev}>Prev</button>
      <input type="text" disabled value={page + 1} />
      <button disabled={isPending || error || page === maxPage - 1} onClick={handleClickNext}>Next</button>
    </div>
  )
}

export default Pagination
