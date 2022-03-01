import React, { FC } from 'react';
import { AccountNumberItem } from 'components';

interface Props {
  data: AccountNumber[];
  male: BasicInfo;
  female: BasicInfo;
}

const AccountNumbers: FC<Props> = ({ data, male, female }) => {
  const main = data.filter((el) => {
    return el.target === '신랑' || el.target === '신부';
  });

  const maleList = data.filter((el) => {
    return el.target.includes('신랑측');
  });

  const femaleList = data.filter((el) => {
    return el.target.includes('신부측');
  });

  return (
    <div>
      <p className="text-center text-base font-sanspro">마음 전하실 곳</p>
      <div className="grid grid-cols-2 gap-5">
        {/* 신랑, 신부 */}
        {main.map((el) => {
          return (
            <AccountNumberItem
              key={el.target}
              data={{
                target: el.target,
                name:
                  el.target === '신랑'
                    ? male.lastName + male.firstName
                    : female.lastName + female.firstName,
                number:
                  el.target === '신랑'
                    ? male.targetNumber
                    : female.targetNumber,
                accountNumber: el,
                isChecked: el.isCheck,
              }}
            />
          );
        })}
      </div>
      <div className="pt-48 pb-12">
        <p className="text-center pb-9 font-sanspro text-base">
          혼주에게 연락하기
        </p>
        <div className="flex justify-around">
          <div>
            <p className="text-center font-sanspro text-sm pb-[10px] border-b border-black">
              신랑측
            </p>
            {maleList.map((el, i) => {
              return (
                <div key={i} className="pb-8">
                  <AccountNumberItem
                    fontSize="text-sm"
                    data={{
                      target: el.target.includes('아버지')
                        ? '아버지'
                        : '어머니',
                      name:
                        el.target === '신랑측 아버지'
                          ? male.fatherName
                          : male.motherName,
                      number:
                        el.target === '신랑측 아버지'
                          ? male.fatherNumber
                          : male.motherNumber,
                      accountNumber: el,
                      isChecked: el.isCheck,
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <p className="text-center font-sanspro text-sm pb-[10px] border-b border-black">
              신부측
            </p>
            {femaleList.map((el, i) => {
              return (
                <div key={i} className="pb-8">
                  <AccountNumberItem
                    fontSize="text-sm"
                    data={{
                      target: el.target.includes('아버지')
                        ? '아버지'
                        : '어머니',
                      name:
                        el.target === '신부측 아버지'
                          ? female.fatherName
                          : female.motherName,
                      number:
                        el.target === '신부측 아버지'
                          ? female.fatherNumber
                          : female.motherNumber,
                      accountNumber: el,
                      isChecked: el.isCheck,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountNumbers;
