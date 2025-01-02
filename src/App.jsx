import './App.css'
import { NavBar } from './components/NavBar'
import BitcoinPage from './pages/BitcoinPage'
import TopNews from './pages/TopNews'
import TrumpPage from './pages/TrumpPage'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'

function App() {
  const [searchedNews, setSearchedNews] = useState('')

  const handleSearch = (value) => {
    setSearchedNews(value)
  }

  return (
    <>
      <Router>
        <div className="mb-3 bg-black">
          <div className="mb-3 navbar-container " >
            <NavBar searched={handleSearch} />
          </div>

          <Routes>

            <Route 
            path='/'
            element={<WelcomePage/>}
            />
            <Route
              path='/trumpNews'
              element={
                <div className="mb-3 bg-black">
                  <TrumpPage searchedNews={searchedNews} />
                </div>} />


            <Route path='/bitcoinNews' element={
              <div className="mb-3">
                <BitcoinPage searchedNews={searchedNews} />
              </div>
            } />

            <Route path='/topNews' element={
              <div className="mb-3">
                <TopNews searchedArticle={searchedNews} />
              </div>
            } />


          </Routes>
        </div>

      </Router >
    </>
  )
}

export default App;
