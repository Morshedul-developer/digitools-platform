import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import PremiumTools from './components/PremiumTools/PremiumTools'
import Status from './components/Status/Status'

function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <Status/>
      <PremiumTools/>
    </>
  )
}

export default App
