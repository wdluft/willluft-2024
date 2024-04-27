import React from 'react';
import Header from '../Header';
import FeatureSection from '../FeatureSection';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
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
        <FeatureSection />
      </motion.div>
    </>
  );
}

export default App;
