import Hero from '../../sections/Hero/Hero'
import Process from "../../sections/Process/Process"
import "./Home.css"
import Contact from '../../sections/Contact/Contact'
import TherapyMethods from '../../sections/TherapyMethods/TherapyMethods'
import Reasons from '../../sections/Reasons/Reasons'

import Greeting from '../../sections/Greeting/Greeting'

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Greeting />
      <Reasons />
      <Process />
      <TherapyMethods />
      <Contact />
    </section>
  )
}

export default Home