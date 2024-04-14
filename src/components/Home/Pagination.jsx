import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div aria-label="Page navigation ">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Previous
                    </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index + 1}>
                        <button
                            onClick={() => onPageChange(index + 1)}
                            aria-current={currentPage === index + 1 ? 'page' : undefined}
                            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === index + 1 ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : ''
                                }`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
