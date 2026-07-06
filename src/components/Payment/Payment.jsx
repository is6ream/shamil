import { QRCodeSVG } from 'qrcode.react'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from '../Reveal/Reveal'
import styles from './Payment.module.css'

// TODO: заменить на реальную ссылку на страницу оплаты/сбора перед публикацией
const PAYMENT_URL = 'https://pay.example.com/mechet-shamil'

function Payment() {
  return (
    <section id="payment" className={`section ${styles.section}`}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.textCol}>
          <span className={styles.tagLight}>Оплата</span>
          <h2 className={styles.title}>Сделайте пожертвование сегодня</h2>
          <p className={styles.subtitle}>
            Отсканируйте QR-код камерой телефона или нажмите на кнопку ниже, чтобы
            перейти на страницу оплаты. Любая сумма приближает нас к завершению
            строительства.
          </p>
          <p className={styles.blessing}>
            Джазакуму-Ллаху хайран — да воздаст вам Аллах благом за вашу помощь
          </p>
        </Reveal>

        <Reveal delay={0.15} className={styles.cardCol}>
          <div className={styles.card}>
            <div className={styles.qrWrap}>
              <QRCodeSVG
                value={PAYMENT_URL}
                size={220}
                bgColor="#ffffff"
                fgColor="#0b0c2a"
                level="M"
                marginSize={2}
                title="QR-код для перехода к оплате пожертвования"
              />
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.payButton}
            >
              Перейти к оплате
              <FiArrowUpRight size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Payment
