import React from 'react'
import { motion } from 'framer-motion'
import { Transitions } from '../transitions/transitions'
import { Link } from 'react-router-dom';
import './notFoundPage.css';

const NotFoundPage = () => {
  return (
    <motion.div initial="out"  animate="in" exit="out" variants={Transitions} className='notFoundPage'>
      <div>
      <h1>404 Don't Found</h1>
      <p>El contenido que buscas no existe...</p>
      </div>
      <Link to='/' > ← Volver a buscador</Link>
    </motion.div>
  )
}

export default NotFoundPage
