import { FaBookOpen, FaHandHoldingHeart, FaMosque } from 'react-icons/fa'
import Reveal from '../Reveal/Reveal'
import sitePhotoWebp from './assets/site-photo.webp'
import sitePhotoJpg from './assets/site-photo.jpg'
import styles from './About.module.css'

const FEATURES = [
  {
    icon: FaMosque,
    title: 'Место для намаза',
    text: 'Просторный и светлый зал, где верующие смогут совершать молитву в спокойствии и достоинстве.',
  },
  {
    icon: FaBookOpen,
    title: 'Обучение',
    text: 'Классы для изучения Корана, арабского языка и основ веры — для детей и взрослых.',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Помощь нуждающимся',
    text: 'Мечеть станет опорой для тех, кому нужна поддержка: словом, делом и заботой общины.',
  },
]

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <Reveal>
          <span className="sectionTag">О сборе</span>
          <h2 className="sectionTitle">Почему ваша поддержка важна?</h2>
          <p className="sectionSubtitle">
            Строительство мечети «Шамиль» — это вклад в будущее общины. Ваше
            пожертвование помогает возвести стены, которые объединят сотни семей
            для молитвы, обучения и добрых дел на долгие поколения вперёд.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className={styles.photo}>
            <picture>
              <source srcSet={sitePhotoWebp} type="image/webp" />
              <img
                src={sitePhotoJpg}
                alt="Ход строительства мечети «Шамиль»"
                width="1463"
                height="1075"
                loading="lazy"
              />
            </picture>
          </figure>
        </Reveal>

        <div className={styles.grid}>
          {FEATURES.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={26} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <figure className={styles.hadith}>
            <p className={styles.hadithArabic} dir="rtl" lang="ar">
              مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ
            </p>
            <figcaption className={styles.hadithTranslation}>
              «Кто построит мечеть ради Аллаха, тому Аллах построит дом в Раю»
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

export default About
