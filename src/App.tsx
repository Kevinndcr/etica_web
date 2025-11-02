import { Navbar, Hero, Footer } from './components'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Hero />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
