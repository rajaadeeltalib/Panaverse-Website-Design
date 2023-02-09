
import Navbar from './Components/Navbar'
import Explorecourse from './Components/explorecourse'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Cards from './Components/Cards'
import Goal from './Components/Goal'
import Student from './Components/Student'
import Footer from './Components/Footer'


export default function Home() {
  return (
    <div>
    {/* <Navbar /> */}
    
    <Hero />
    <About />
    <Timeline />
    <Cards />
    <Goal />
    <Student/>
    <Footer />
      
    </div>
  )
}
