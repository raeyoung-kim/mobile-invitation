import React, { FC } from 'react';
import Link from 'next/link';
import { BsTrash } from 'react-icons/bs';
import request from 'services/api';
import { useRouter } from 'next/router';

interface Props {
  data: {
    id: string;
    src: string;
  };
}

const HistoryItem: FC<Props> = ({ data }) => {
  const { reload } = useRouter();
  const onDelete = async () => {
    try {
      if (confirm('제작 샘플을 삭제하시겠습니까?')) {
        await request.delete(`/sample/${data.id}`);
        reload();
      }
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
