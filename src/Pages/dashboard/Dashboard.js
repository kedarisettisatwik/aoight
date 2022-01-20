import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Error from '../error/Error';
// const user = JSON.parse(sessionStorage.getItem('user'));

function Board() {

  const pageVariants = {
    initial: {
      x:"100vw",
    },
    in: {
      x:"0",
    },
    out: {
      x:"0vw",
    },
  }

  const location = useLocation();

  if (location.state){
    return (
      <motion.section
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={{ type: 'spring', bounce: 0.25 }}>

         <div>
             <h2>Name : {location.state.Name} </h2>
         </div>

      </motion.section>
    );
  }else{
    return (
      <Error/>
    );
  }
}


export default Board;
