'use client'
import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, className = '', direction = 'up' }) {
  // Allow passing directions if you ever want side-scrolling reveals
  const yOffset = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xOffset = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <motion.div
      // 1. Start completely invisible and shifted
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      
      // 2. Animate to original position
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      
      // 3. Trigger when the element is 10% into the viewport (prevents late pop-ins)
      viewport={{ once: true, margin: "-10%" }}
      
      // 4. Ultra-smooth Apple-style cubic-bezier easing curve
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Snappy start, very smooth deceleration
      }}
      
      className={className}
      
      // 5. Force the browser GPU to prepare for these specific animations
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}