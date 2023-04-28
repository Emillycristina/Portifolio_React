import { useState } from 'react'
import NavBar from './componentes/NavBar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Principal from './componentes/Principal/Principal';
import Primeiro from './componentes/Primeiro/Primeiro';
import Tecnologias from './componentes/Tecnologias/Tecnologias';
import Contato from './componentes/Contato/Contato';
import Footer from './componentes/Footer/Footer';

function App() {
 

  return (
    
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/Main' element={<Main />}/>
            <Route path='/NavBar' element={<NavBar />} />
            <Route path='/Principal' element={<Principal />} />
            <Route path='/Primeiro' element={<Primeiro />} />
            <Route path='/Tecnologias' element={<Tecnologias />} />
            <Route path='/Contato' element={<Contato />} />
            <Route path='/Footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default App