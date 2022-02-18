import {
  AccountNumberForm,
  CheckInfo,
  InputTextarea,
  TargetInfo,
  Input,
  FileInput,
  Textarea,
} from 'components';
import { GreetingSampleModal } from 'containers';
import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import classnames from 'classnames';

const MakeSamplePage: NextPage = () => {
  const [data, setData] = useState<ProductInfo>({
    mainPhoto: '',
    male: {
      lastName: '',
      firstName: '',
      rank: '',
      fatherName: '',
      isFather: true,
      fatherNumber: '',
      motherName: '',
      isMother: true,
      motherNumber: '',
    },
    female: {
      lastName: '',
      firstName: '',
      rank: '',
      fatherName: '',
      isFather: true,
      fatherNumber: '',
      motherName: '',
      isMother: true,
      motherNumber: '',
    },
    greetingMessage: '',
    isMonth: false,
    isD_day: false,
    weddingDate: '',
    weddingTime: '',
    weddingAddress: '',
    weddingAddressName: '',
    DetailWeddingAddress: '',
    weddingContact: '',
    wayToComeTitle: '',
    wayToComeDescription: '',
    noticeTitle: '',
    noticeDescription: '',
    noticeURL: '',
    noticeButtonName: '',
    galleryPictures: [''],
    accountNumberList: [
      {
        target: '',
        targetBank: '',
        targetAccountNumber: '',
        accountHolder: '',
      },
    ],
    wayToComeList: [
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
      {
        title: '',
        description: '',
      },
    ],
    isGuestBook: false,
    videoUrl: '',
    kakaoThumbnail: '',
    kakaoThumbnailTitle: '',
    kakaoThumbnailDescription: '',
    URLThumbnail: '',
    URLThumbnailTitle: '',
    URLThumbnailDescription: '',
  });

  const [selectButtons, setSelectButtons] = useState([
    { title: '신랑', isCheck: true },
    { title: '신부', isCheck: false },
    { title: '신랑측 아버지', isCheck: false },
    { title: '신랑측 어머니', isCheck: false },
    { title: '신부측 아버지', isCheck: false },
    { title: '신부측 어머니', isCheck: false },
  ]);

  const [modal, setModal] = useState({
    isGreetingSample: false,
  });

  const onGreetingModal = () => {
    setModal({
      ...modal,
      isGreetingSample: !modal.isGreetingSample,
    });
  };

  const setGreetingMessage = (val: string) => {
    setData({
      ...data,
      greetingMessage: val,
    });
    onGreetingModal();
  };

  return (
    <div className="max-w-[1200px] m-auto px-5 pb-[120px] lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {/* 메인사진 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">
          메인사진을 선택해주세요 📸
        </strong>
        <p className="description">가로, 세로에 상관 없이 추가 가능합니다.</p>
        <FileInput />
      </section>

      {/* 신랑측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo
          target={'신랑'}
          data={data.male}
          setData={(value) => {
            setData({
              ...data,
              male: value,
            });
          }}
        />
      </section>

      {/* 신부측 정보 */}
      <section className="mt-10 lg:w-[40%]">
        <TargetInfo
          target={'신부'}
          data={data.female}
          setData={(value) => {
            setData({
              ...data,
              female: value,
            });
          }}
        />
      </section>

      {/* 인사말 정보 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">인사말을 알려주세요 📝</strong>
        <p className="description">
          원하시는 인사말으로 직접 추가도 가능합니다.
        </p>
        <div className="mt-4">
          <Textarea
            placeholder={'인사말'}
            value={data.greetingMessage}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setData({
                ...data,
                greetingMessage: e.target.value,
              });
            }}
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
              onClick={setGreetingMessage}
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
            <input
              className="border rounded py-2 px-3 mr-4"
              type={'date'}
              onChange={(e) => {
                setData({
                  ...data,
                  weddingDate: e.target.value,
                });
              }}
            />
            <input
              className="mt-3 lg:mt-0 border rounded py-2 px-3"
              type={'time'}
              onChange={(e) => {
                setData({
                  ...data,
                  weddingTime: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            <input
              type={'checkbox'}
              defaultChecked={data.isMonth}
              onChange={(e) =>
                setData({
                  ...data,
                  isMonth: e.target.checked,
                })
              }
            />
            <p className="ml-2 description">달력 표시</p>
          </div>
          <div className="flex items-center ml-4">
            <input
              type={'checkbox'}
              defaultChecked={data.isD_day}
              onChange={(e) =>
                setData({
                  ...data,
                  isD_day: e.target.checked,
                })
              }
            />
            <p className="ml-2 description">디데이 표시</p>
          </div>
        </div>
        <div className="mt-4">
          <Input
            placeholder={'예식장 주소'}
            value={data.weddingAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({
                ...data,
                weddingAddress: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-4">
          <Input
            placeholder={'예식장 명'}
            value={data.weddingAddressName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({
                ...data,
                weddingAddressName: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-4">
          <Input
            placeholder={'예식장 층과 홀'}
            value={data.DetailWeddingAddress}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({
                ...data,
                DetailWeddingAddress: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-4">
          <Input
            placeholder={'예식장 연락처'}
            value={data.weddingContact}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setData({
                ...data,
                weddingContact: e.target.value,
              });
            }}
          />
        </div>
      </section>

      <section className=" mt-6 lg:w-[40%]">
        <CheckInfo title={'오시는길 🚶 🏃'}>
          <div>
            {data?.wayToComeList.map((el, i) => {
              return (
                <InputTextarea
                  key={i}
                  inputValue={el.title}
                  inputPlaceholder={`교통수단 ${i + 1} (지하철, 자가용, 버스)`}
                  textareaValue={el.description}
                  textareaPlaceholder={'오시는길 내용'}
                  onChageInput={(e) => {
                    const result = data.wayToComeList;
                    result.splice(i, 1, {
                      title: e.target.value,
                      description: result[i].description,
                    });
                    setData({
                      ...data,
                      wayToComeList: result,
                    });
                  }}
                  onChangeTextarea={(e) => {
                    const result = data.wayToComeList;
                    result.splice(i, 1, {
                      title: result[i].title,
                      description: e.target.value,
                    });
                    setData({
                      ...data,
                      wayToComeList: result,
                    });
                  }}
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
              inputValue={data.noticeTitle}
              inputPlaceholder="공지사항 제목"
              textareaValue={data.noticeDescription}
              textareaPlaceholder="공지사항 내용"
              onChageInput={(e) =>
                setData({
                  ...data,
                  noticeTitle: e.target.value,
                })
              }
              onChangeTextarea={(e) => {
                setData({
                  ...data,
                  noticeDescription: e.target.value,
                });
              }}
            />
            <p className="mt-4 description">
              (선택) 링크를 추가하시면 공지사항 아래에 링크로 이동가능한 버튼이
              생성됩니다.
              <br /> (예. https://www.youtube.com)
            </p>
            <div className="mt-4">
              <Input
                placeholder={'링크 URL'}
                value={data.noticeURL}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    noticeURL: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4">
              <Input
                placeholder={'링크 버튼 제목'}
                value={data.noticeButtonName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    noticeButtonName: e.target.value,
                  });
                }}
              />
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'갤러리 사진 🖼 (최대 15장)'}>
          <div>
            <section className="mt-5">
              <FileInput />
            </section>
          </div>
        </CheckInfo>
        <CheckInfo title={'계좌번호 🎀'}>
          <>
            <div>
              <div className="grid grid-cols-2 gap-4 py-5">
                {selectButtons?.map((button, i) => {
                  return (
                    <button
                      onClick={() => {
                        const targetList = JSON.parse(
                          JSON.stringify(selectButtons)
                        );
                        targetList.splice(i, 1, {
                          title: selectButtons[i].title,
                          isCheck: !selectButtons[i].isCheck,
                        });
                        setSelectButtons(targetList);
                      }}
                      key={button.title}
                      className={classnames('button', {
                        'bg-black text-white': button.isCheck,
                      })}
                    >
                      {button.title}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              {selectButtons?.map((el) => {
                return (
                  <AccountNumberForm
                    key={el.title}
                    target={el.title}
                    isCheck={el.isCheck}
                  />
                );
              })}
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'방명록 추가 📖'}>
          <></>
        </CheckInfo>
        <CheckInfo title={'식전 영상 📽'}>
          <div className="pt-2">
            <p className="description">
              식전영상은 유투브에 업로드 후 <br /> URL을 복사하여 추가해주시면
              됩니다.
            </p>
            <div className="mt-4">
              <Input
                placeholder={'유투부 URL'}
                value={data.videoUrl}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    videoUrl: e.target.value,
                  });
                }}
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
              inputValue={data.kakaoThumbnailTitle}
              inputPlaceholder="카카오톡 제목 (철수 💗 영희 결혼합니다)"
              textareaValue={data.kakaoThumbnailDescription}
              textareaPlaceholder="카카오톡 내용 (ex. 식장명, 예식일자)"
              onChageInput={(e) =>
                setData({
                  ...data,
                  kakaoThumbnailTitle: e.target.value,
                })
              }
              onChangeTextarea={(e) =>
                setData({
                  ...data,
                  kakaoThumbnailDescription: e.target.value,
                })
              }
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
              inputValue={data.URLThumbnail}
              inputPlaceholder="URL 제목 (철수 💗 영희 결혼합니다)"
              textareaValue={data.URLThumbnailDescription}
              textareaPlaceholder="URL 내용 (ex. 식장명, 예식일자)"
              onChageInput={(e) =>
                setData({
                  ...data,
                  URLThumbnail: e.target.value,
                })
              }
              onChangeTextarea={(e) =>
                setData({
                  ...data,
                  URLThumbnailDescription: e.target.value,
                })
              }
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
