import { useState } from 'react';
import Header from './components/Header';
import Hero from './section/Hero/Hero';
import Presentation from './section/Presentation/Presentation';
import Project from './section/Project/Project';
import Footer from './section/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero />
     <Presentation />
     <Project />
     <Footer />
     
    </>
  )
}

export default App
