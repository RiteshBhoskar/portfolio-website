'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 h-0.5 w-full rounded-full block items-center'
    initial={{ opacity: 0 , y: 100}}
    animate={{ opacity : 1, y: 0}}
    transition={{ delay: 0.125}}>
    </motion.div>
  )
};
