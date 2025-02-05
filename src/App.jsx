
import { Outlet, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage'
import DetailsPage from './pages/DetailsPage'
import SearchPage from './pages/SearchPage'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      console.log('response', response)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    fetchTrendingData()
  }, [])

  return (
    <main className='pb-14 lg:pb-0'>
      <Header />
      <div className='pt-16'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path=":explore" element={<ExplorePage />} />
          <Route path=":explore/:id" element={<DetailsPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  )
}

export default App
