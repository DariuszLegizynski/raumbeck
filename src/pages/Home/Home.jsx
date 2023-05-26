import Hero from '../../sections/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Process from "../../sections/Process/Process"
import "./Home.css"

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Navbar />
      <Process />
    </section>
  )
}

export default Home