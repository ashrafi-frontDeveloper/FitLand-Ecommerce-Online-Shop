import React from 'react'
import Header from './Components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes';
import './App.css'

export default function App() {
  return (
    <div>
      <div className=''>
        <Header></Header>
        {/* <AppRoutes /> */}
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  )
}
