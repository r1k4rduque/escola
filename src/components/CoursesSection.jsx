import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import CourseCard from './CourseCard'
import { siteConfig } from '../config/siteConfig'
import { fadeUp, staggerContainer } from './motion'

export default function CoursesSection() {
  return (
    <SectionWrapper
      id="cursos"
      className="bg-gradient-to-b from-dark-blue to-deep-navy"
      stagger
    >
      <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
        <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-cyber-cyan">
          Cursos
        </p>
        <h2 className="font-heading text-2xl font-bold text-ice-white sm:text-3xl">
          Três trilhas. Um ponto de partida em comum.
        </h2>
        <p className="mt-3 text-ice-white/75">
          Escolha o caminho que combina com você ou descubra no WhatsApp qual
          faz mais sentido para o seu objetivo.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
      >
        {siteConfig.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
