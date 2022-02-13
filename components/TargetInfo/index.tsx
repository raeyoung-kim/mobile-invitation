import React from 'react';

interface Props {
  target: string;
}

const TargetInfo: React.FC<Props> = ({ target }) => {
  return (
    <div>
      <strong className="font-jua text-[19px]">
        {target}측 정보를 알려주세요 {target === '신랑' ? '🤵' : '👰'}
      </strong>
      <p className="font-sanspro text-gray-500 text-xs">
        가입하시는 내용만 청첩장에 표기됩니다.
      </p>
      <div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div>
            <input
              type={'text'}
              className="w-full border rounded py-2 px-3"
              placeholder={`${target} 성`}
            />
          </div>
          <div>
            <input
              className="w-full border rounded py-2 px-3"
              type={'text'}
              placeholder={`${target} 이름`}
            />
          </div>
        </div>

        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`${target} 서열 (장남, 차남, 아들)`}
          />
        </div>

        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`${target} 이버님 성함`}
          />
        </div>

        <div className="mt-2 flex">
          <input className="border rounded py-2 px-3" type={'checkbox'} />
          <p className="font-sanspro text-gray-500 text-xs px-2">
            고인이시면 체크하여주세요
          </p>
        </div>

        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`${target} 아버님 연락처`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`${target} 어머님 성함`}
          />
        </div>
        <div className="mt-2 flex">
          <input type={'checkbox'} />
          <p className="font-sanspro text-gray-500 text-xs px-2">
            고인이시면 체크하여주세요
          </p>
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'tel'}
            placeholder={`${target} 어머님 연락처`}
          />
        </div>
      </div>
    </div>
  );
};

export default TargetInfo;
