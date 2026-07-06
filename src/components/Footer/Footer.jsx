import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark} aria-hidden="true" />
          <span>
            Мечеть <em>Шамиль</em>
          </span>
        </div>

        <p className={styles.blessing}>
          «Кто построит мечеть ради Аллаха, тому Аллах построит дом в Раю».
          Пусть каждое доброе дело вернётся к вам многократным благом.
        </p>

        <p className={styles.copyright}>
          © {YEAR} ММРО «Махалля Шамиль» № 2570 г. Уфы ЦДУМ России. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer
