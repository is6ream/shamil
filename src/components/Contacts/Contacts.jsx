import { FiMapPin, FiPhone } from 'react-icons/fi'
import Reveal from '../Reveal/Reveal'
import styles from './Contacts.module.css'

const ORG_NAME = 'ММРО «Махалля Шамиль» № 2570 г. Уфы ЦДУМ России'
const PHONE_DISPLAY = '+7 962 529-77-77'
const PHONE_HREF = 'tel:+79625297777'
const ADDRESS = 'г. Уфа, ул. Цюрупы, д. 75, офис 5, 450077, Респ. Башкортостан'

const REQUISITES = [
  { label: 'ИНН/ОГРН', value: '0274940398 / 1180280054580' },
  { label: 'ИНН/КПП', value: '0274940398 / 027401001' },
  { label: 'Расчётный счёт', value: '40703810606000003898' },
  { label: 'Банк', value: 'Башкирское отделение №8598 ПАО Сбербанк' },
  { label: 'БИК', value: '048073601' },
  { label: 'Корр. счёт', value: '30101810300000000601' },
]

function Contacts() {
  return (
    <section id="contacts" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <span className="sectionTag">Контакты</span>
          <h2 className="sectionTitle">Остались вопросы? Свяжитесь с нами</h2>
          <p className="sectionSubtitle">{ORG_NAME}</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={0.05}>
            <div className={styles.infoCard}>
              <a className={styles.infoRow} href={PHONE_HREF}>
                <span className={styles.infoIcon}>
                  <FiPhone size={20} />
                </span>
                <span>
                  <span className={styles.infoLabel}>Телефон</span>
                  <span className={styles.infoValue}>{PHONE_DISPLAY}</span>
                </span>
              </a>

              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <FiMapPin size={20} />
                </span>
                <span>
                  <span className={styles.infoLabel}>Адрес</span>
                  <span className={styles.infoValue}>{ADDRESS}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.requisitesCard}>
              <h3 className={styles.requisitesTitle}>Реквизиты организации</h3>
              <dl className={styles.requisitesList}>
                {REQUISITES.map(({ label, value }) => (
                  <div className={styles.requisitesItem} key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contacts
