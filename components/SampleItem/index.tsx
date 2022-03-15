import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Props {
  data: Sample;
}

const SampleItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-3 rounded-lg shadow">
      <div className="relative w-full pb-[100%]">
        <Image
          alt="샘플 이미지"
          src="https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA"
          className="absolute w-full h-full bg-gray-200 object-cover"
          layout="fill"
        />
      </div>

      <p className="font-sanspro font-bold pt-3">{data.title}</p>
      <div className="grid grid-cols-2 gap-3 py-3">
        <Link href={`/sample/${data.id}`}>
          <a
            target="_blank"
            className="bg-black text-white text-center py-2 rounded-md"
          >
            샘플 보기
          </a>
        </Link>

        <Link href={`/make/${data.id}`}>
          <a className="bg-black text-white text-center py-2 rounded-md">
            제작 하기
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SampleItem;
