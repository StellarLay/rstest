import React from 'react';
import { motion } from 'framer-motion';

const HeadPopup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 1 }}
      transition={{ delay: 0.9 }}
      className='hidden xl:block absolute max-w-[380px] bottom-[-60px] right-[25%] rounded-[30px] bg-white text-black z-30 px-6 py-6 shadow-lg'
    >
      <p className='text-[16px] text-left'>
        <span className='text-[#ED7138]'>Обучение</span> для тех,{' '}
        <span className='text-black/50'>
          кто готов учиться 10 часов в неделю
        </span>
        , <span className='text-[#ED7138]'>чтобы получить результат</span>. Мы
        даем <span className='text-black/50'>необходимые навыки</span> на
        продвинутом уровне,
        <span className='text-black/50'> убирая все лишнее</span>
      </p>
    </motion.div>
  );
};

export default HeadPopup;
