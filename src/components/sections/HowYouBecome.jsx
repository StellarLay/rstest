import React from 'react';
import MessageBoxOne from '../../utils/MessageBoxOne';

import laptop from '../../assets/img/laptopmac.png';
import question from '../../assets/img/question.svg';
import MessageBoxTwo from '../../utils/MessageBoxTwo';

const HowYouBecome = () => {
  return (
    <section className='relative flex flex-col items-center pb-[80px]'>
      <h1 className='text-[25px] font-bold sm:text-[30px] xl:text-[53px]'>
        Как именно ты станешь разработчиком
      </h1>
      <img
        className='static cursor-pointer mt-3 sm:absolute 
        sm:top-[30px] sm:left-[12%]
        md:top-[-1px] md:left-[6%]
        lg:top-[18px] lg:left-[10%]'
        src={question}
        alt='question-icon'
      />
      <p className='max-w-[90%] text-[24px] mt-10 xl:max-w-[65%]'>
        На курсе ты не просто изучаешь теоретический материал. в процессе
        изучения ты повторяешь за действующим разработчиком, после чего
        <span className='font-bold'>
          {' '}
          закрепляешь знания на заданиях и проектах.
        </span>
      </p>
      <div className='mt-10 flex flex-col items-center sm:block'>
        <img className='hidden sm:block' src={laptop} alt='laptop icon' />
        <MessageBoxOne />
        <MessageBoxTwo />
      </div>
      <span className='hidden sm:block mt-4'>Проекты учеников</span>
    </section>
  );
};

export default HowYouBecome;
