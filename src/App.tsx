
import './App.css'
import { Header, Parking } from './componentes'
import { About } from './componentes/acerca de/About'
import { Hero } from './componentes/hero/Hero'

function App() {
  

  return (
    <>
    <div className='flex flex-col w-full min-h-screen bg-slate-950  items-center p-2'>
       <Header/>
       <Hero/>
       <Parking/>
       <About/>
    </div>
    </>
  )
}

export default App
