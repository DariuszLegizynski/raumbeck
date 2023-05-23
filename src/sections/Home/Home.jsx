import Hero from '../../components/HeroImage/Hero'
import Navbar from '../../components/Navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Navbar />
    </section>
  )
}

export default Home