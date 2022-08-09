import React, { Fragment } from 'react';
import Head from '../components/sections/Head';
import Advantages from '../components/sections/Advantages';
import HowYouBecome from '../components/sections/HowYouBecome';
import FinishedCourse from '../components/sections/FinishedCourse';

const Landing = () => {
  return (
    <Fragment>
      <Head />
      <Advantages />
      <HowYouBecome />
      <FinishedCourse />
    </Fragment>
  );
};

export default Landing;
