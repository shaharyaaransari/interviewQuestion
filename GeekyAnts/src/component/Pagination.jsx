import React from 'react';

export const Pagination = ({ totalPages, setPage, page }) => {
  const pageCount = Math.ceil(totalPages);
  
  return (
    <div>
      {Array(pageCount).fill(0).map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          disabled={page === i + 1}
          style={{ backgroundColor: page === i + 1 ? 'red' : '' }}
          className='pagination'
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};
