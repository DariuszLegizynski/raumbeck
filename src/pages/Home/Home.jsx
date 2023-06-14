import Hero from '../../sections/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Process from "../../sections/Process/Process"
import "./Home.css"
import Contact from '../../sections/Contact/Contact'
import TherapyMethods from '../../sections/TherapyMethods/TherapyMethods'

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Navbar />
      <Process />
      <TherapyMethods />
      <Contact />
    </section>
  )
}

export default Home