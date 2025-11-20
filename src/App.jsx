import { useState } from 'react';
import Header from './components/Header';
import Hero from './section/Hero';
import Presentation from './section/Presentation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero />
     <Presentation />
    </>
  )
}

export default App
