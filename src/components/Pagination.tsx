import {
  DoubleLeftArrowIcon,
  DoubleRightArrowIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "./icons/pagination";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  rowCount: number;
  rowsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, rowCount, rowsPerPage }) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 lg:px-6">
      <div className="flex lg:flex-row flex-col gap-y-8 lg:items-center lg:justify-between w-full">
        <div className="lg:w-1/5 hidden lg:block"></div>
        <div className="lg:w-3/5 w-full text-center text-[13px] font-semibold">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex gap-2 -space-x-px rounded-md"
          >
            <button
              onClick={() => handlePageChange(1)}
              disabled={page === 1}
              className={`relative inline-flex items-center rounded-lg px-3.5 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                page === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <span className="sr-only">First Page</span>
              <DoubleLeftArrowIcon aria-hidden="true" />
            </button>

            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`relative inline-flex items-center rounded-lg px-4 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                page === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <span className="sr-only">Previous Page</span>
              <LeftArrowIcon aria-hidden="true" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .slice(Math.max(page - 2, 0), page + 2)
              .map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  aria-current={page === pageNum}
                  className={`relative inline-flex items-center px-4 py-2 text-sm rounded-lg font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 ${
                    page === pageNum
                      ? "bg-[#FF916E] text-white"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`relative inline-flex items-center rounded-lg px-4 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                page === totalPages ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <span className="sr-only">Next Page</span>
              <RightArrowIcon aria-hidden="true" />
            </button>

            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={page === totalPages}
              className={`relative inline-flex items-center rounded-lg px-3.5 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                page === totalPages ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <span className="sr-only">Last Page</span>
              <DoubleRightArrowIcon aria-hidden="true" />
            </button>
          </nav>
        </div>

        <div className="lg:w-1/5 w-full">
          <p className="text-sm text-gray-700 lg:text-right text-center font-semibold">
            Page
            <select
              value={page}
              onChange={(e) => handlePageChange(Number(e.target.value))}
              className="mx-2 px-4 py-1.5 border border-gray-300 rounded-lg"
            >
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </select>
            of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
