import React from 'react';

const MessageBoxTwo = (props) => {
  return (
    <div
      className='flex flex-col items-start static bottom-[10%] right-[6%] p-[20px] mt-6 shadow-xl bg-white border-[1px] rounded-[10px] border-[#947EFF] h-auto w-[90%]
    sm:w-[375px] sm:absolute
    md:w-[360px] md:bottom-[15%] md:right-[6%]'
    >
      <span className='uppercase text-[#9088FF] font-semibold'>
        Индивидуальные проекты
      </span>
      <p className='text-left mt-4 text-[14px] leading-[24px]'>
        Чтобы свободно чуствовать себя на позиции junior необходим опыт
        разработки. Вы создадите 3 проекта изучая материал от простого к
        сложному:
      </p>
      <ol className='text-left mt-5 text-[14px] leading-[24px] list-decimal p-[15px]'>
        <li>Проект корзина с товарами для интернет-магазина</li>
        <li>Социальная сеть для поиска и знакомств</li>
        <li>Дипломный проект на выбранную вами тему:</li>
        <ul className=''>
          <li>- Учет доходов и рассходов</li>
          <li>- Бронирование отелей</li>
          <li>
            - Интернет-магазин или схожий по сложности проект, которым вы
            выберете и утвердите с куратором
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default MessageBoxTwo;
