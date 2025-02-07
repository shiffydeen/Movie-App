
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
import { useDispatch } from 'react-redux'
import { setBannerData, setImageURL } from './store/movieoSlice'

function App() {

  const dispatch = useDispatch();
  
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
      console.log('response', response.data.results)
    } catch (error) {
      console.log("error", error)
    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")
      console.log(response)
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchConfiguration();
    fetchTrendingData();
    
  }, [])

  return (
    <main className='pb-14 lg:pb-0'>
      <Header />
      <div>
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
