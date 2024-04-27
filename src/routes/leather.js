import React from 'react';
import Leathercraft from '../components/Leathercraft';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// instagram id: 54912543863
// IF pulling from instagram, use url below
// const URL = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"54912543863","first":4}`;

function Leather() {
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
        <Leathercraft />
      </motion.div>
    </>
  );
}

export default Leather;
