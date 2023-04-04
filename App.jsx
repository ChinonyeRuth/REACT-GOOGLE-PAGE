import './App.css'
import Button from './components/button'
import Footer from './components/Footer'
import Header from './components/Header'
import Language from './components/Language'
import SearchSection from './components/SearchSection'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <Button />
      <Language />
      <Footer />
    </div>
  )
}

export default App
