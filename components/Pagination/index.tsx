import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { getPages } from 'services';

interface Props {
  load: (page: string) => void;
  totalPage: number;
}

const Pagination: FC<Props> = ({ load, totalPage }) => {
  const totalPages = [...Array(totalPage || 1)].map((el, i) => i + 1);

  const [pageIndex, setPageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = getPages(totalPages, 3, pageIndex + 1);

  const max = Math.ceil(totalPage / 3);

  const onPrev = () => {
    const resultIndex = pageIndex - 1;
    setPageIndex(resultIndex);
    const result = getPages(totalPages, 3, resultIndex + 1);
    load(String(result[result.length - 1]));
    setCurrentPage(result[result.length - 1]);
  };

  const onNext = () => {
    const resultIndex = pageIndex + 1;
    setPageIndex(resultIndex);
    const result = getPages(totalPages, 3, resultIndex + 1);
    load(String(result[0]));
    setCurrentPage(result[0]);
  };

  return (
    <div className="flex items-center">
      <>
        {pageIndex > 0 ? (
          <button
            onClick={() => {
              if (pageIndex > 0) {
                onPrev();
              }
            }}
          >
            <BiChevronLeft />
          </button>
        ) : null}

        {pages.map((page) => {
          return (
            <button
              key={page}
              className={classNames('px-2 font-thin', {
                'font-semibold': currentPage === page,
              })}
              onClick={() => {
                load(String(page));
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
        {max > pageIndex + 1 ? (
          <button
            onClick={() => {
              if (pageIndex < pages.length - 1) {
                onNext();
              }
            }}
          >
            <BiChevronRight />
          </button>
        ) : null}
      </>
    </div>
  );
};

export default Pagination;
