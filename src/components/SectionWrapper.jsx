import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from './motion'
import useMotionSafeMode from './useMotionSafeMode'

export default function SectionWrapper({
  id,
  children,
  className = '',
  innerClassName = '',
  as: Tag = 'section',
  stagger = false,
}) {
  const motionSafeMode = useMotionSafeMode()

  return (
    <Tag
      id={id}
      className={`relative scroll-mt-24 py-16 md:py-24 ${className}`}
    >
      <motion.div
        className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}
        variants={stagger ? staggerContainer : fadeUp}
        initial={motionSafeMode ? false : 'hidden'}
        {...(!motionSafeMode && {
          whileInView: 'visible',
          viewport: viewportOnce,
        })}
      >
        {children}
      </motion.div>
    </Tag>
  )
}
