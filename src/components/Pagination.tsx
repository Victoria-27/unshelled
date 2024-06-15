import React from 'react';
import { PaginationProps } from '../types';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  disableNext,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-l transition-colors duration-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-2 transition-colors duration-300 ${
            pageNumber === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={disableNext}
        className="px-4 py-2 bg-gray-300 rounded-r transition-colors duration-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
