import { FaMosque, FaQrcode, FaWallet } from 'react-icons/fa'
import Reveal from '../Reveal/Reveal'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    icon: FaQrcode,
    title: 'Отсканируйте QR-код',
    text: 'Наведите камеру телефона на QR-код в разделе оплаты — откроется страница пожертвования.',
  },
  {
    icon: FaWallet,
    title: 'Оплатите удобным способом',
    text: 'Выберите комфортный способ оплаты и внесите любую сумму, которую сочтёте нужной.',
  },
  {
    icon: FaMosque,
    title: 'Ваш вклад пойдёт на строительство',
    text: 'Средства будут направлены напрямую на возведение мечети «Шамиль».',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <span className="sectionTag">Как помочь</span>
          <h2 className="sectionTitle">Поддержать строительство легко</h2>
          <p className="sectionSubtitle">Три простых шага к благому делу.</p>
        </Reveal>

        <ol className={styles.steps}>
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.12} className={styles.stepWrap}>
              <li className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIcon}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
