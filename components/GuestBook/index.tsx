import classNames from 'classnames';
import { GuestMessage } from 'components';
import { GuestbookWritingModal } from 'containers';
import React, { FC, useState } from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { useGuestBook, useUser } from 'services';

interface Props {
  id: string;
  userId?: string;
  fontFamily?: string;
}

const GuestBook: FC<Props> = ({ id, userId, fontFamily }) => {
  const [isWriteModal, setIsWriteModal] = useState(false);

  const { data, load } = useGuestBook(id);
  const { user } = useUser();

  return (
    <>
      <div>
        <p
          className={classNames('text-center text-lg', {
            'font-myeongjo': fontFamily === 'font-myeongjo',
            'font-thin': fontFamily === 'font-thin',
            'font-stylish': fontFamily === 'font-stylish',
          })}
        >
          방명록
        </p>
        {data?.length ? (
          <div className="py-5">
            {data.map((el: GuestBook) => {
              return (
                <div className="mt-3" key={el._id}>
                  <GuestMessage
                    data={el}
                    superUser={userId === String(user.id)}
                    load={load}
                    fontFamily={fontFamily}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-gray-200 shadow my-5 py-6 rounded">
            <div className="flex justify-center items-center text-gray-400 text-sm">
              <BiBookOpen className="mr-2" />
              <p
                className={classNames('text-center', {
                  'font-myeongjo': fontFamily === 'font-myeongjo',
                  'font-thin': fontFamily === 'font-thin',
                  'font-stylish': fontFamily === 'font-stylish',
                })}
              >
                축하 글을 남겨주세요
              </p>
            </div>
          </div>
        )}

        <div className={'flex justify-between items-center'}>
          <div className="w-[60%]">{/* <p>pagenation</p> */}</div>
          <button
            className={classNames(
              'px-3 py-2 bg-gray-400 rounded-[25px] text-white text-sm',
              {
                'font-myeongjo': fontFamily === 'font-myeongjo',
                'font-thin': fontFamily === 'font-thin',
                'font-stylish': fontFamily === 'font-stylish',
              }
            )}
            onClick={() => setIsWriteModal(!isWriteModal)}
          >
            작성하기
          </button>
        </div>
      </div>
      {isWriteModal && (
        <GuestbookWritingModal
          id={id}
          load={load}
          onClose={() => {
            setIsWriteModal(!isWriteModal);
          }}
        />
      )}
    </>
  );
};

export default GuestBook;
