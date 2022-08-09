import React from 'react';
import { motion } from 'framer-motion';

// Images start
import circles from '../../assets/img/circles.png';
import tableImg from '../../assets/img/table.png';
import dots from '../../assets/img/dots.png';
import excelIcon from '../../assets/img/excel.png';
// Images end

import HeadPopup from '../../utils/HeadPopup';

const Head = () => {
  return (
    <section className='w-full h-full flex justify-end text-white'>
      <div
        className='relative flex flex-col items-start w-full h-auto bg-banner-color rounded-l-lg pt-8 z-[5]
      sm:mt-14 sm:pl-16 sm:w-11/12 sm:h-banner sm:flex-row
      md:mt-6 md:pl-4 md:flex-col md:h-auto
      xl:flex-row'
      >
        <div
          className='flex flex-col items-start max-w-2xl z-10 px-6
        md:max-w-3xl'
        >
          <h1
            className='text-[40px] text-left leading-[50px] font-semibold 
          sm:text-title sm:leading-title'
          >
            Профессия <br />
            Frontend — разработчик
          </h1>
          <p
            className='text=[30px] text-left font-semibold leading-[24px] mt-8 
          sm:text-subtext sm:leading-10'
          >
            Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием
            технологий больше, чем у других кандидатов
          </p>
          <p
            className='text-18px text-left font-normal leading-7 mt-5
          sm:text-subtext sm:leading-10 sm:mt-10
          xl:text-18px xl:leading-[28px]'
          >
            Начиная с основ изучишь JavaScript, разберешься с самыми популярными
            технологиями, научишься писать Frontend{' '}
            <span className='font-bold'>на фреймворке</span> и связывать его с
            Backend.{' '}
            <span className='font-bold'>
              Навыки после курса оцениваются от 100 т.р.
            </span>
          </p>
          <button
            className='w-full bg-main-button-color hover:bg-white hover:text-black mt-8 mb-12 py-[16px] rounded-button transition-all
          sm:px-10 sm:py-5 sm:mt-16
          md:w-80 md:mt-10'
          >
            Задать вопрос об обучении
          </button>
        </div>
        <div
          className='relative flex items-end justify-end h-full z-20
        lg:w-full'
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='w-[90%] lg:w-[70%] xl:w-[95%] 2xl:w-[80%]'
            src={tableImg}
            alt='table'
          />
          <div
            className='absolute left-[10px] top-[-20px] z-[-1] opacity-30
          sm:left-[30px] sm:top-[30px]
          md:top-[-20px]
          lg:left-[245px]
          xl:left-[0] xl:top-[20px]
          2xl:left-[280px] 2xl:top-[-10px]'
          >
            <img src={dots} alt='circles' />
          </div>
        </div>
        <div className='absolute bottom-0 z-0'>
          <img src={circles} alt='circles' />
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 1 }}
          transition={{ delay: 1.2 }}
          className='hidden absolute xl:block bottom-[70px] right-[42%] z-40'
          src={excelIcon}
          alt='excel icon'
        />
        <HeadPopup />
      </div>
      <div
        className='hidden absolute left-[-45px] bottom-[-45px] z-[2]
        sm:left-[20px] sm:bottom-[45px] sm:block
        md:hidden
        xl:block'
      >
        <img src={dots} alt='circles' />
      </div>
    </section>
  );
};

export default Head;
