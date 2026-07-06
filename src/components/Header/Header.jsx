import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#about', label: 'О сборе' },
  { href: '#how-it-works', label: 'Как помочь' },
  { href: '#contacts', label: 'Контакты' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${
        isMenuOpen ? styles.menuOpen : ''
      }`}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={handleNavClick}>
          <span className={styles.logoMark} aria-hidden="true" />
          <span className={styles.logoText}>
            Мечеть <em>Шамиль</em>
          </span>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#payment" className={styles.cta} onClick={handleNavClick}>
            Внести вклад
          </a>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
    </header>
  )
}

export default Header
