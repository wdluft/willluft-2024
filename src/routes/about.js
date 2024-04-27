import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  const location = useLocation();
  return (
    <>
      <motion.div
        id='home'
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutMe />
      </motion.div>
    </>
  );
}

export default About;
