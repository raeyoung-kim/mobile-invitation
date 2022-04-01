import React, { useRef, useState } from 'react';
import { CgClose } from 'react-icons/cg';

import request from 'services/api';

interface Props {
  limit?: number;
}

const FileInput: React.FC<Props> = ({ limit }) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [imgSrcList, setImgSrcList] = useState<string[]>([]);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const filelist = e.target.files;
    const formData = new FormData();

    filelist && formData.append('image', filelist?.[0]);

    const fileReader = new FileReader();
    filelist && fileReader.readAsDataURL(filelist?.[0]);
    fileReader.onload = (e) => {
      const result = e?.target?.result as string;
      setImgSrcList([...imgSrcList, result]);
    };

    try {
      // await request.post('/upload/image', formData, {
      //   headers: {
      //     'content-type': 'multipart/form-data',
      //   },
      // });
      // if (filelist) {
      //   await request.post('/upload/presigned', {
      //     contentTypes: filelist[0].type,
      //   });
      // }
    } catch {
      console.error;
    }
  };

  const handleRemoveImage = (index: number) => {
    const result = JSON.parse(JSON.stringify(imgSrcList));
    result.splice(index, 1);

    setImgSrcList(result);
  };

  return (
    <div className="flex w-full overflow-auto scrollbar-hide">
      {imgSrcList?.map((el, i) => {
        return (
          <div
            key={i}
            className="relative min-w-[200px] max-w-[200px] min-h-[200px] max-h-[200px] bg-black mt-5 mr-5 flex items-center justify-center"
          >
            <button
              className="absolute top-0 right-0 bg-[#444040b8] text-white w-8 h-8 flex justify-center items-center"
              onClick={() => handleRemoveImage(i)}
            >
              <CgClose />
            </button>
            <img
              alt={'이미지'}
              src={el}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}
      {limit !== imgSrcList?.length ? (
        <div>
          <input
            accept="*"
            ref={fileRef}
            onChange={onFileChange}
            type="file"
            className="hidden"
          />
          <div
            onClick={() => {
              fileRef && fileRef.current?.click();
            }}
            className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300"
          >
            +
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FileInput;
