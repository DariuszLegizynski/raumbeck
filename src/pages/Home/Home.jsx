import Hero from '../../sections/Hero/Hero'
import NavbarMobile from '../../components/Navbar/Mobile/NavbarMobile'
import Process from "../../sections/Process/Process"
import "./Home.css"
import Contact from '../../sections/Contact/Contact'
import TherapyMethods from '../../sections/TherapyMethods/TherapyMethods'
import Reasons from '../../sections/Reasons/Reasons'
import NavbarDesktop from '../../components/Navbar/Desktop/NavbarDesktop'

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <NavbarMobile />
      <NavbarDesktop />
      <Reasons />
      <Process />
      <TherapyMethods />
      <Contact />
    </section>
  )
}

export default Home