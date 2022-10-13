
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
//import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Partner from './Components/Partner/Partner';
import Relax from './Components/Relax/Relax';


function App() {


  return (
    <div className="App mx-auto relative text-neutral-900  dark:text-neutral-200 bg-white dark:bg-neutral-800">
 <Hero/>
 <About/>
 <Partner/>
 <Relax/>
<Contact/>
    </div>
  )
}

export default App
