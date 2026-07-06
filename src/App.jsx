import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Payment from './components/Payment/Payment'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Payment />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
