import { Routes, Route} from 'react-router-dom'
import React from 'react'
import LandingPage from './Pages/LandingPage.tsx'
import DetailPage from './Pages/DetailPage.tsx'
import AddPartai from './Pages/AddPartai.tsx'
import AddPaslon from './Pages/AddPaslon.tsx'
import ListPartai from './Pages/ListPartai.tsx'
import ListPaslon from './Pages/ListPaslon.tsx'
import Admin from './Pages/Admin.tsx'
import Vote from './Pages/Vote.tsx' 
import EditPartai from './Pages/EditPartai.tsx'



const App: React.FC = () => {

  

  return (
    <>
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/voting' Component={Vote} />
        <Route path='/news-detail' Component={DetailPage} />
        <Route path='/admin' Component={Admin} />
        <Route path='/paslon' Component={ListPaslon} />
        <Route path='/add-paslon' Component={AddPaslon} />
        <Route path='/partai' Component={ListPartai} />
        <Route path='/add-partai' Component={AddPartai} />
        <Route path='/edit-partai/:id' Component={EditPartai} />
      </Routes>
    </>
  )
}

export default App