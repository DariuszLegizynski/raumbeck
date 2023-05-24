import Hero from '../../sections/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"
import Process from '../../sections/Process/Process'

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