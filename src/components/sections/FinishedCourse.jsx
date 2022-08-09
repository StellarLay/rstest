import React from 'react';
import { motion } from 'framer-motion';

// Icons
import item1 from '../../assets/img/finished/item-1.svg';
import item2 from '../../assets/img/finished/item-2.svg';
import item3 from '../../assets/img/finished/item-3.svg';
import item4 from '../../assets/img/finished/item-4.svg';
import item5 from '../../assets/img/finished/item-5.svg';
import item6 from '../../assets/img/finished/item-6.svg';

const FinishedCourse = () => {
  return (
    <section className='w-full flex justify-center pb-[80px]'>
      <div
        className='w-[100%] flex flex-col items-center bg-[#0F1214] h-auto rounded-[10px] pb-[80px]
      md:w-[95%]'
      >
        <h1
          className='text-[26px] text-white/95 font-bold mt-10 max-w-[90%]
        sm:text-[30px] sm:mt-16
        md:text-[54px] md:mt-16'
        >
          Что тебе даст <br />
          прохождение курса?
        </h1>
        <div className='mt-6'>
          <motion.span
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
            transition={{ delay: 0.1 }}
            className='uppercase text-white/95 font-semibold text-[24px] tracking-[1px]'
          >
            Skills upgrade
          </motion.span>
          <motion.div
            className='flex flex-col items-center justify-center mt-16
          lg:flex-row'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 0.3 }}
              className='flex flex-col items-center w-[100%] pb-3
              lg:w-[30%]'
            >
              <img src={item1} alt='item 1' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                Научишься понимать терминологию, документацию и писать код на
                уровне востребованных разработчиков
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 0.8 }}
              className='flex flex-col items-center w-[100%] pb-3 mt-8
              lg:w-[30%] lg:mt-0'
            >
              <img src={item2} alt='item 2' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                твои знания превратятся в систему, ты не просто изучишь
                технологии, но и поймешь как развиваться дальше
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 1.2 }}
              className='flex flex-col items-center w-[100%] pb-3 mt-8
              lg:w-[30%] lg:mt-0'
            >
              <img src={item3} alt='item 3' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                Создашь Fullstack приложение, которое покажет что твои навыки
                выше чем у стандартного junior
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className='mt-[60px]'>
          <motion.span
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1 }}
            transition={{ delay: 0.1 }}
            className='uppercase text-white/95 font-semibold text-[24px] tracking-[1px]'
          >
            Strong hard skills
          </motion.span>
          <motion.div
            className='flex flex-col items-center justify-center mt-10
          lg:flex-row'
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 1.2 }}
              className='flex flex-col items-center w-[100%] pb-3
              lg:w-[30%]'
            >
              <img src={item4} alt='item 4' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                Создашь с помощью фреймворка React визуальную часть приложения:
                элементы, анимация
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 1.2 }}
              className='flex flex-col items-center w-[100%] pb-3 mt-8
              lg:w-[30%] lg:mt-0'
            >
              <img src={item5} alt='item 5' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                Изучишь NodeJS на достаточном уровне чтобы связывать frontend и
                backend
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 1 }}
              transition={{ delay: 1.2 }}
              className='flex flex-col items-center w-[100%] pb-3 mt-8
              lg:w-[30%] lg:mt-0'
            >
              <img src={item6} alt='item 6' />
              <p className='text-white/95 max-w-[70%] mt-6 font-medium'>
                Овладеешь базой, от которого можно отталкиваться и учить любую
                технологию на JavaScript
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinishedCourse;
