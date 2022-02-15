import {
  AccountNumberForm,
  CheckInfo,
  InputTextarea,
  TargetInfo,
} from 'components';
import { GreetingSampleModal } from 'containers';
import { NextPage } from 'next';
import React, { useState } from 'react';

const MakeSamplePage: NextPage = () => {
  const [modal, setModal] = useState({
    isGreetingSample: false,
  });

  const onGreetingModal = () => {
    setModal({
      ...modal,
      isGreetingSample: !modal.isGreetingSample,
    });
  };

  return (
    <div className="max-w-[1200px] m-auto px-5 pb-[120px] lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {/* 메인사진 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">
          메인사진을 선택해주세요 📸
        </strong>
        <p className="description">가로, 세로에 상관 없이 추가 가능합니다.</p>
        <div className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300">
          +
        </div>
      </section>

      {/* 신랑측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo target={'신랑'} />
      </section>

      {/* 신부측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo target={'신부'} />
      </section>

      {/* 인사말 정보 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">인사말을 알려주세요 📝</strong>
        <p className="description">
          원하시는 인사말으로 직접 추가도 가능합니다.
        </p>
        <div className="mt-4">
          <textarea
            className="w-full lg:w-[40%] min-h-[200px] max-h-[200px] border rounded py-2 px-3"
            placeholder={'인사말'}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={onGreetingModal}
            className="bg-black text-white text-center p-3 shadow rounded-md"
          >
            샘플 인사말 보기
          </button>
          {modal.isGreetingSample && (
            <GreetingSampleModal
              onClose={onGreetingModal}
              onClick={() => {
                console.log('샘플 선택');
              }}
            />
          )}
        </div>
      </section>

      {/* 예식장 위치, 예식일자 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <strong className="font-jua text-[19px]">
          예식장 위치와 <br /> 예식일자를 알려주세요 🗓
        </strong>
        <div className="mt-4">
          <p className="description">예식 일자</p>
          <div className="mt-4">
            <input className="border rounded py-2 px-3 mr-4" type={'month'} />
            <input
              className="mt-3 lg:mt-0 border rounded py-2 px-3"
              type={'time'}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            <input type={'checkbox'} />
            <p className="ml-2 description">달력 표시</p>
          </div>
          <div className="flex items-center ml-4">
            <input type={'checkbox'} />
            <p className="ml-2 description">디데이 표시</p>
          </div>
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 주소`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 명`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'text'}
            placeholder={`예식장 층과 홀`}
          />
        </div>
        <div className="mt-4">
          <input
            className="w-full border rounded py-2 px-3"
            type={'tel'}
            placeholder={`예식장 연락처`}
          />
        </div>
      </section>

      <section className=" mt-6 lg:w-[40%]">
        <CheckInfo title={'오시는길 🚶 🏃'}>
          <div>
            {[...Array(3)].map((el, i) => {
              return (
                <InputTextarea
                  key={i}
                  inputValue=""
                  inputPlaceholder="교통수단(지하철, 자가용, 버스)"
                  textareaValue="오시는길 내용"
                />
              );
            })}
          </div>
        </CheckInfo>
        <CheckInfo title={'공지사항 📃'}>
          <>
            <p className="mt-2 description">
              코로나 안내, 전세버스 안내, 라이브 안내 등 필요하신 공지사항을
              추가하실 수 있습니다.
              <br /> (링크를 추가하시면 공지사항 아래에 버튼이 생성됩니다)
            </p>
            <InputTextarea
              inputValue=""
              inputPlaceholder="공지사항 제목"
              textareaValue=""
              textareaPlaceholder="공지사항 내용"
            />
            <p className="mt-4 description">
              (선택) 링크를 추가하시면 공지사항 아래에 링크로 이동가능한 버튼이
              생성됩니다.
              <br /> (예. https://www.youtube.com)
            </p>
            <div className="mt-4">
              <input
                className="w-full border rounded py-2 px-3"
                type={'text'}
                placeholder="링크 URL"
              />
            </div>{' '}
            <div className="mt-4">
              <input
                className="w-full border rounded py-2 px-3"
                type={'text'}
                placeholder="링크 버튼 제목"
              />
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'갤러리 사진 🖼 (최대 15장)'}>
          <div>
            <section className="mt-5">
              <div className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300">
                +
              </div>
            </section>
          </div>
        </CheckInfo>
        <CheckInfo title={'계좌번호 🎀'}>
          <>
            <div>
              <div className="grid grid-cols-2 gap-4 py-5">
                <button className="button">신랑</button>
                <button className="button">신부</button>
                <button className="button">신랑측 아버지</button>
                <button className="button">신랑측 어머니</button>
                <button className="button">신부측 아버지</button>
                <button className="button">신부측 어머니</button>
              </div>
            </div>
            <div>
              <AccountNumberForm target={'신랑'} />
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'방명록 추가 📖'}>
          <></>
        </CheckInfo>
        <CheckInfo title={'식전 영상 📽'}>
          <div className="pt-2">
            <p className="description">
              식전영상은 유튜브에 업로드 후 <br /> URL을 복사하여 추가해주시면
              됩니다.
            </p>
            <div className="mt-4">
              <input
                className="w-full border rounded py-2 px-3"
                type={'text'}
              />
            </div>
          </div>
        </CheckInfo>
        <CheckInfo title={'카카오톡 공유 시'}>
          <div className="pt-2">
            <p className="description">카카오 썸네일 사진</p>
            <p className="description">(최적화 사이즈 400 * 550)</p>
            <section className="mt-5">
              <div className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300">
                +
              </div>
            </section>
            <InputTextarea
              inputValue=""
              inputPlaceholder="카카오톡 제목 (철수 💗 영희 결혼합니다)"
              textareaValue=""
              textareaPlaceholder="카카오톡 내용 (ex. 식장명, 예식일자)"
            />
          </div>
        </CheckInfo>
        <CheckInfo title={'URL 공유 시'}>
          <div className="pt-2">
            <p className="description">URL 썸네일 사진</p>
            <p className="description">(최적화 사이즈 1200 * 630)</p>
            <section className="mt-5">
              <div className="cursor-pointer border-dashed text-[40px] w-[200px] h-[200px] border border-gray-200 mt-5 flex items-center justify-center font-jua text-gray-300">
                +
              </div>
            </section>
            <InputTextarea
              inputValue=""
              inputPlaceholder="URL 제목 (철수 💗 영희 결혼합니다)"
              textareaValue=""
              textareaPlaceholder="URL 내용 (ex. 식장명, 예식일자)"
            />
          </div>
        </CheckInfo>
        <button className="mt-16 block m-auto bg-black text-white text-center p-3 shadow rounded-md">
          샘플 제작하기
        </button>
      </section>
    </div>
  );
};

export default MakeSamplePage;
