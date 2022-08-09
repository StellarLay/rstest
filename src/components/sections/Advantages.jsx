import React from 'react';

const Advantages = () => {
  return (
    <section className='flex flex-col px-[20px] my-[50px] sm:flex-row sm:justify-evenly sm:my-[100px]'>
      <div className='flex flex-col items-center xl:flex-row'>
        <div className='hidden xl:block w-[10px] h-[10px] bg-black/10 rounded-[50%] mr-[20px]'></div>
        <span className='text-[72px] font-semibold text-[#ED7138]'>293</span>
        <span className='text-center xl:text-left xl:ml-[15px]'>
          HD видеоурока
          <br /> длительностью 3 - 15 минут
        </span>
      </div>
      <div className='flex flex-col items-center xl:flex-row'>
        <div className='hidden xl:block w-[10px] h-[10px] bg-black/10 rounded-[50%] mr-[20px]'></div>
        <span className='text-[72px] font-semibold text-[#ED7138]'>6</span>
        <span className='text-center xl:text-left xl:ml-[15px]'>
          Мероприятий на курсе (Хакатоны,
          <br /> мастер классы, разборы и т.д.)
        </span>
      </div>
      <div className='flex flex-col items-center xl:flex-row'>
        <div className='hidden xl:block w-[10px] h-[10px] bg-black/10 rounded-[50%] mr-[20px]'></div>
        <span className='text-[72px] font-semibold text-[#ED7138]'>193</span>
        <span className='text-center xl:text-left xl:ml-[15px]'>
          заданий и тестов
          <br /> для закрепления
        </span>
      </div>
    </section>
  );
};

export default Advantages;
