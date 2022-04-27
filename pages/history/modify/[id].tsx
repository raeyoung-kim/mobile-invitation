import {
  AccountNumberForm,
  CheckInfo,
  InputTextarea,
  TargetInfo,
  Input,
  FileInput,
  Textarea,
  ModalLayout,
  Map,
  Loading,
  Radio,
} from 'components';
import { GreetingSampleModal } from 'containers';
import { NextPage } from 'next';
import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import DaumPostcode from 'react-daum-postcode';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import request from 'services/api';
import { useData, useUser } from 'services';
import axios from 'axios';

const HistoryModifyPage: NextPage = () => {
  const { push, query } = useRouter();
  const token = Cookies.get('refreshToken');

  const { user } = useUser();
  const { data, setData } = useData();

  const [isLoading, setIsLoading] = useState(false);

  const [imageFile, setImageFile] = useState<{
    [k: string]: null | File | File[];
    mainPhoto: null | File;
    kakaoThumbnail: null | File;
    URLThumbnail: null | File;
    galleryPictures: File[];
  }>({
    mainPhoto: null,
    kakaoThumbnail: null,
    URLThumbnail: null,
    galleryPictures: [],
  });

  const [imgSrcList, setImgSrcList] = useState<{ [k: string]: string[] }>({
    mainPhoto: [],
    kakaoThumbnail: [],
    URLThumbnail: [],
    galleryPictures: [],
  });

  const [modal, setModal] = useState({
    isGreetingSample: false,
    isPostcode: false,
  });

  const handleImageModify = async (
    key: string,
    deleteImage: string | string[],
    addImage: null | File | File[]
  ) => {
    if (Array.isArray(deleteImage)) {
      if (deleteImage.length) {
        await Promise.all(
          deleteImage.map(async (image) => {
            const id = image.split('/').slice(-1)[0];
            await request.delete(`/upload/image/${id}`);
          })
        );
      }
    }
    if (Array.isArray(addImage)) {
      if (addImage.length) {
        const imgContentTypes = addImage.map((el) => el?.type);
        const res = await request.post('/upload/presigned', {
          contentTypes: imgContentTypes,
        });

        await Promise.all(
          addImage.map((file, index) => {
            const { presigned } = res.data[index];
            const formData = new FormData();
            for (const key in presigned.fields) {
              formData.append(key, presigned.fields[key]);
            }
            file && formData.append('Content-Type', file.type);
            file && formData.append('file', file);
            return axios.post(presigned.url, formData);
          })
        );

        const result = res.data.map((el: any) => {
          return `${el.presigned.url}/${el.presigned.fields.key}`;
        });

        return result;
      }
    }
    if (typeof deleteImage === 'string' && deleteImage) {
      const id = deleteImage.split('/').slice(-1)[0];
      await request.delete(`/upload/image/${id}`);
    }
    if (!Array.isArray(addImage) && addImage) {
      const addImg = addImage! as File;
      const imgContentTypes = addImg.type;
      const res = await request.post('/upload/presigned', {
        contentTypes: [imgContentTypes],
      });
      const { presigned } = res.data[0];
      const formData = new FormData();
      for (const key in presigned.fields) {
        formData.append(key, presigned.fields[key]);
      }
      formData.append('Content-Type', addImg.type);
      formData.append('file', addImg);
      await axios.post(presigned.url, formData);

      return `${res.data[0].presigned.url}/${res.data[0].presigned.fields.key}`;
    }
  };

  const handleModify = async () => {
    try {
      setIsLoading(true);

      const result: {
        [k: string]: string | string[];
      } = {
        mainPhoto: data.mainPhoto,
        galleryPictures: data.galleryPictures,
        kakaoThumbnail: data.kakaoThumbnail,
        URLThumbnail: data.URLThumbnail,
      };

      if (!imgSrcList.mainPhoto.length && !imageFile.mainPhoto) {
        return alert('메인사진을 선택해주세요 📸');
      }

      const keyList = Object.keys(imgSrcList);

      await Promise.all(
        keyList.map(async (key) => {
          const chageValue = imgSrcList[key];
          const currentData = data[key]! as string | string[];

          if (typeof currentData === 'string') {
            if (currentData !== chageValue[0]) {
              const addImageUrl = await handleImageModify(
                key,
                currentData,
                imageFile[key]
              );
              result[key] = '';
              if (addImageUrl) {
                result[key] = addImageUrl;
              }
            }
          }
          if (
            Array.isArray(currentData) &&
            currentData?.length !== chageValue.length
          ) {
            const deleteImgList = currentData.filter(
              (el) => !chageValue.includes(el)
            );

            const addImgList = await handleImageModify(
              key,
              deleteImgList,
              imageFile[key]
            );

            if (deleteImgList) {
              const filterList = currentData.filter((el) =>
                chageValue.includes(el)
              );
              result[key] = filterList;
            }

            if (addImgList?.length) {
              result[key] = [
                ...(result[key]! as string[]),
                ...(addImgList! as string[]),
              ];
            }
          }
        })
      );

      await request.put('/sample', {
        id: query.id,
        data: {
          ...data,
          ...result,
        },
      });

      push('/history');
    } catch {
      console.error;
    } finally {
      setIsLoading(false);
    }
  };

  const onTargetClick = (i: number) => {
    const targetList = JSON.parse(JSON.stringify(data.accountNumberList));
    targetList.splice(i, 1, {
      ...data.accountNumberList[i],
      isCheck: !data.accountNumberList[i].isCheck,
    });
    setData({
      ...data,
      accountNumberList: targetList,
    });
  };

  const onChangeTagetBank = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const targetList = JSON.parse(JSON.stringify(data.accountNumberList));
    targetList.splice(i, 1, {
      ...data.accountNumberList[i],
      targetBank: e.target.value,
    });
    setData({
      ...data,
      accountNumberList: targetList,
    });
  };

  const onChangeTagetAccountNumber = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const targetList = JSON.parse(JSON.stringify(data.accountNumberList));
    targetList.splice(i, 1, {
      ...data.accountNumberList[i],
      targetAccountNumber: e.target.value,
    });
    setData({
      ...data,
      accountNumberList: targetList,
    });
  };

  const onChageAccountHolder = (
    e: ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const targetList = JSON.parse(JSON.stringify(data.accountNumberList));
    targetList.splice(i, 1, {
      ...data.accountNumberList[i],
      accountHolder: e.target.value,
    });
    setData({
      ...data,
      accountNumberList: targetList,
    });
  };

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

  const load = useCallback(async () => {
    try {
      const { data } = await request.get('/sample', {
        params: {
          id: query.id,
        },
      });

      setData(data);
    } catch {
      console.error;
    }
  }, [query.id, setData]);

  useEffect(() => {
    !token && push('/login');
  }, [push, token]);

  useEffect(() => {
    query.id && load();
  }, [load, query.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] m-auto px-5 pb-[120px] lg:pt-[40px] lg:pb-[280px] lg:px-0">
      {/* 메인사진 */}
      <section className="mt-10">
        <strong className="font-jua text-[19px]">
          메인 사진을 선택해 주세요 📸
        </strong>
        <p className="description">가로, 세로에 상관 없이 추가 가능합니다.</p>
        <FileInput
          data={data.mainPhoto ? [data.mainPhoto] : []}
          limit={1}
          handleFile={(val: File) => {
            setImageFile({
              ...imageFile,
              mainPhoto: val,
            });
          }}
          handleImgSrcList={(val: string[]) => {
            setImgSrcList({
              ...imgSrcList,
              mainPhoto: val,
            });
          }}
        />
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
      <section className="mt-10 lg:w-[40%]">
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
            <div className="mt-3">
              <Input
                type={'date'}
                value={data.weddingDate}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    weddingDate: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-3">
              <Input
                type={'time'}
                value={data.weddingTime}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({
                    ...data,
                    weddingTime: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center ml-4">
            <input
              type={'checkbox'}
              checked={data.isD_day}
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
            onFocus={() =>
              setModal({
                ...modal,
                isPostcode: true,
              })
            }
          />
          {/* 주소 검색 */}
          {modal.isPostcode && (
            <ModalLayout
              onClose={() => {
                setModal({
                  ...modal,
                  isPostcode: false,
                });
              }}
            >
              <DaumPostcode
                style={{ height: '100vh' }}
                onComplete={(resData) => {
                  setData({
                    ...data,
                    weddingAddress: resData.address,
                  });

                  setModal({
                    ...modal,
                    isPostcode: false,
                  });
                }}
              />
            </ModalLayout>
          )}
          {data?.weddingAddress ? (
            <div className="mt-4">
              <Map address={data.weddingAddress} />
            </div>
          ) : null}
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
            type="tel"
            placeholder={'예식장 연락처(예: 02-0000-0000)'}
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
        <CheckInfo
          isData={
            data.wayToComeList.find((el) => el.title !== '') ? true : false
          }
          title={'오시는길 🚶 🏃'}
        >
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
        <CheckInfo
          isData={data.noticeTitle || data.noticeURL ? true : false}
          title={'공지사항 📃'}
        >
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
        <CheckInfo
          isData={data.galleryPictures?.length ? true : false}
          title={'갤러리 사진 🖼 (최대 15장)'}
        >
          <div>
            <div className="mt-5">
              <Radio
                isChecked={data.galleryType === 'slider'}
                text={'슬라이드형'}
                onClick={() => {
                  setData({
                    ...data,
                    galleryType:
                      data.galleryType === 'slider' ? 'album' : 'slider',
                  });
                }}
              />
              <div className="mt-2">
                <Radio
                  isChecked={data.galleryType === 'album'}
                  text={'앨범형'}
                  onClick={() => {
                    setData({
                      ...data,
                      galleryType:
                        data.galleryType === 'album' ? 'slider' : 'album',
                    });
                  }}
                />
              </div>
            </div>
            <section className="mt-2">
              <FileInput
                limit={15}
                data={data.galleryPictures}
                handleFile={(val: File) => {
                  if (imageFile.galleryPictures) {
                    setImageFile({
                      ...imageFile,
                      galleryPictures: [...imageFile.galleryPictures, val],
                    });
                  } else {
                    setImageFile({
                      ...imageFile,
                      galleryPictures: [val],
                    });
                  }
                }}
                handleImgSrcList={(val: string[]) => {
                  setImgSrcList({
                    ...imgSrcList,
                    galleryPictures: val,
                  });
                }}
              />
            </section>
          </div>
        </CheckInfo>
        <CheckInfo
          isData={
            data.accountNumberList?.find((el) => el.isCheck) ? true : false
          }
          title={'계좌번호 🎀'}
        >
          <>
            <div>
              <div className="grid grid-cols-2 gap-4 py-5">
                {data.accountNumberList?.map((button, i) => {
                  return (
                    <button
                      onClick={() => {
                        onTargetClick(i);
                      }}
                      key={button.target}
                      className={classNames('button', {
                        'bg-black text-white': button.isCheck,
                      })}
                    >
                      {button.target}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              {data.accountNumberList?.map((el, i) => {
                return (
                  <AccountNumberForm
                    key={el.target}
                    target={el.target}
                    isCheck={el.isCheck}
                    targetBank={el.targetBank}
                    onChangeTagetBank={(e: ChangeEvent<HTMLInputElement>) => {
                      onChangeTagetBank(e, i);
                    }}
                    targetAccountNumber={el.targetAccountNumber}
                    onChangeTagetAccountNumber={(
                      e: ChangeEvent<HTMLInputElement>
                    ) => {
                      onChangeTagetAccountNumber(e, i);
                    }}
                    accountHolder={el.accountHolder}
                    onChageAccountHolder={(
                      e: ChangeEvent<HTMLInputElement>
                    ) => {
                      onChageAccountHolder(e, i);
                    }}
                  />
                );
              })}
            </div>
          </>
        </CheckInfo>
        <CheckInfo title={'방명록 추가 📖'}>
          <></>
        </CheckInfo>
        <CheckInfo isData={data.videoUrl ? true : false} title={'식전 영상 📽'}>
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
        <CheckInfo
          isData={data.kakaoThumbnail ? true : false}
          title={'카카오톡 공유 시'}
        >
          <div className="pt-2">
            <p className="description">카카오 썸네일 사진</p>
            <p className="description">(최적화 사이즈 400 * 550)</p>
            <FileInput
              limit={1}
              data={data.kakaoThumbnail ? [data.kakaoThumbnail] : []}
              handleFile={(val: File) => {
                setImageFile({
                  ...imageFile,
                  kakaoThumbnail: val,
                });
              }}
              handleImgSrcList={(val: string[]) => {
                setImgSrcList({
                  ...imgSrcList,
                  kakaoThumbnail: val,
                });
              }}
            />
            <InputTextarea
              inputValue={data.kakaoTitle}
              inputPlaceholder="카카오톡 제목 (철수 💗 영희 결혼합니다)"
              textareaValue={data.kakaoDescription}
              textareaPlaceholder="카카오톡 내용 (ex. 식장명, 예식일자)"
              onChageInput={(e) =>
                setData({
                  ...data,
                  kakaoTitle: e.target.value,
                })
              }
              onChangeTextarea={(e) =>
                setData({
                  ...data,
                  kakaoDescription: e.target.value,
                })
              }
            />
          </div>
        </CheckInfo>
        <CheckInfo
          isData={data.URLThumbnail ? true : false}
          title={'URL 공유 시'}
        >
          <div className="pt-2">
            <p className="description">URL 썸네일 사진</p>
            <p className="description">(최적화 사이즈 1200 * 630)</p>
            <FileInput
              limit={1}
              data={data.URLThumbnail ? [data.URLThumbnail] : []}
              handleFile={(val: File) => {
                setImageFile({
                  ...imageFile,
                  URLThumbnail: val,
                });
              }}
              handleImgSrcList={(val: string[]) => {
                setImgSrcList({
                  ...imgSrcList,
                  URLThumbnail: val,
                });
              }}
            />
            <InputTextarea
              inputValue={data.URLTitle}
              inputPlaceholder="URL 제목 (철수 ♥ 영희 결혼합니다)"
              textareaValue={data.URLDescription}
              textareaPlaceholder="URL 내용 (ex. 식장명, 예식일자)"
              onChageInput={(e) =>
                setData({
                  ...data,
                  URLTitle: e.target.value,
                })
              }
              onChangeTextarea={(e) =>
                setData({
                  ...data,
                  URLDescription: e.target.value,
                })
              }
            />
          </div>
        </CheckInfo>
        <button
          onClick={handleModify}
          className="mt-16 block m-auto bg-black text-white text-center p-3 shadow rounded-md"
        >
          수정하기
        </button>
      </section>
    </div>
  );
};

export default HistoryModifyPage;
