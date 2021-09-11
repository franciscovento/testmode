import React from 'react'
import { motion } from 'framer-motion'
import { Transitions } from '../transitions/transitions'

const NotFoundPage = () => {
  return (
    <motion.div initial="out"  animate="in" exit="out" variants={Transitions}>
      <h1>404 Dont Found</h1>
    </motion.div>
  )
}

export default NotFoundPage
