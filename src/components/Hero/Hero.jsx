import { motion } from 'framer-motion'
import MosqueGraphic from './MosqueGraphic'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Сбор средств на строительство</span>
          <h1 className={styles.title}>
            Стань частью великого дела — помоги в&nbsp;строительстве мечети «Шамиль»
          </h1>
          <p className={styles.subtitle}>
            Мечеть — это сердце общины: место для намаза, знаний и&nbsp;поддержки
            нуждающихся. Каждый вклад, каким бы малым он ни был, становится частью
            благого дела, которое будет служить людям долгие годы.
          </p>
          <div className={styles.actions}>
            <a href="#payment" className={styles.ctaPrimary}>
              Внести вклад
            </a>
            <a href="#about" className={styles.ctaSecondary}>
              Узнать больше
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <MosqueGraphic className={styles.graphic} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
