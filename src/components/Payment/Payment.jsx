import Reveal from '../Reveal/Reveal'
import qrCode from './assets/qr-code.jpg'
import styles from './Payment.module.css'

function Payment() {
  return (
    <section id="payment" className={`section ${styles.section}`}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.textCol}>
          <span className={styles.tagLight}>Оплата</span>
          <h2 className={styles.title}>Сделайте пожертвование сегодня</h2>
          <p className={styles.subtitle}>
            Отсканируйте QR-код камерой телефона, чтобы перейти на страницу
            оплаты. Любая сумма приближает нас к завершению строительства.
          </p>
          <p className={styles.blessing}>
            Джазакуму-Ллаху хайран — да воздаст вам Аллах благом за вашу помощь
          </p>
        </Reveal>

        <Reveal delay={0.15} className={styles.cardCol}>
          <div className={styles.card}>
            <div className={styles.qrWrap}>
              <img
                src={qrCode}
                alt="QR-код для перехода к оплате пожертвования"
                width="220"
                height="220"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Payment
