import CustomCursor from "./components/CustomCursor"
import ClickBurst from "./components/ClickBurst"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Programs from "./components/Programs"
import Gallery from "./components/Gallery"
import Team from "./components/Team"
import Faculty from "./components/Faculty"  
import Alumni from "./components/Alumni"
import Footer from "./components/Footer"


function App() {
  return (
    <main>
      <div className="h-[88px]">
        <CustomCursor />
        <ClickBurst />
        <Navbar />
      </div>

      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Team />
      <Faculty />
      <Alumni /> 
      <Footer />  
    </main>
  )
}

export default App