import { 
  Navbar, 
  Hero, 
  EventPromo, 
  Topics, 
  Agenda, 
  Registration, 
  LiveStream, 
  Footer 
} from './components'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        {/* Hero Section */}
        <Hero />
        
        {/* Event Promotion */}
        <EventPromo />
        
        {/* Topics/Syllabus */}
        <Topics />
        
        {/* Agenda/Schedule */}
        <Agenda />
        
        {/* Live Stream */}
        <LiveStream 
          youtubeVideoId="dQw4w9WgXcQ" 
          isLive={false}
        />
        
        {/* Registration Form */}
        <Registration 
          googleFormsUrl="https://forms.google.com/your-form-url"
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
