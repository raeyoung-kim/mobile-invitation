import React, { FC } from 'react';
import Link from 'next/link';
import { BsTrash } from 'react-icons/bs';

interface Props {
  data: {
    id: string;
    src: string;
  };
}

const HistoryItem: FC<Props> = ({ data }) => {
  const onDelete = () => {
    try {
      // 이미지 삭제 및 데이터 삭제
    } catch {
      console.error;
    }
  };
  return (
    <div className="p-3 rounded-lg shadow">
      <Link href={`/history/${data.id}`}>
        <a target="_blank">
          <div className="relative w-full pb-[100%]">
            <img
              alt="샘플 이미지"
              src={data.src}
              className="absolute w-full h-full bg-gray-200 object-cover"
            />
          </div>
        </a>
      </Link>

      <div className="grid grid-cols-2 gap-3 py-3">
        <Link href={`/history/modify/${data.id}`}>
          <a className="bg-black text-white text-center py-2 rounded-md">
            수정하기
          </a>
        </Link>
        <button
          className="bg-black flex items-center justify-center text-white text-center py-2 rounded-md"
          onClick={onDelete}
        >
          <BsTrash />
          <p>삭제하기</p>
        </button>
      </div>
    </div>
  );
};

export default HistoryItem;
