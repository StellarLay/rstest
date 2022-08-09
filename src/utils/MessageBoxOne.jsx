import React from 'react';

const MessageBox = (props) => {
  return (
    <div
      className='flex flex-col items-start static bottom-[30%] left-[5%] p-[20px] shadow-xl bg-white border-[1px] rounded-[10px] border-[#947EFF] h-auto w-[90%]
    sm:absolute sm:w-[324px]
    md:w-[324px] md:bottom-[35%] md:left-[2%]
    lg:left-[5%]'
    >
      <span className='uppercase text-[#9088FF] font-semibold'>
        2 Командных проекта
      </span>
      <p className='text-left mt-4 text-[14px] leading-[24px]'>
        Симуляция комерческого проекта - получаете ТЗ и организовываете
        командную разработку. Прокачивая навыки для будущей работы.
      </p>
      <div className='text-left mt-5 text-[14px] leading-[24px]'>
        <span className='font-bold'>Проекты на тему:</span>
        <ul>
          <li>- JavaScript плагин "Контекстное меню"</li>
          <li>- Cайт на React, презентующий команду участников</li>
        </ul>
      </div>
    </div>
  );
};

export default MessageBox;
