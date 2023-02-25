import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import Home from './Components/home/Home';
import Services from './Components/services/Services';
import About from './Components/about/About';
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Testimonials from './Components/testimonials/Testimonials';
import Blog from './Components/blog/Blog';
import Pricing from './Components/pricing/Pricing';

const App = () => {
  return(
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <Services />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Testimonials />
      <Blog />
      <Pricing />
      
    </main>
    </>
  )
}


export default App;
