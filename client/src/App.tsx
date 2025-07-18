import './App.css'
import Carousel from './layouts/homepage/carousel/Carousel'
import ExploreTopBooks from './layouts/homepage/ExploreTopBooks'
import Hero from './layouts/homepage/Hero'
import Navbar from './layouts/Navbar'


export default function App() {
  

  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Hero />
    </>
  )
}

