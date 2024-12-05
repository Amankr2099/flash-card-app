import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      {/* <NewCard /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/signup' element={ <Signup/>}/> */}
        {/* <Route path='/login' element={ <Login/>}/> */}

        {/* <Route path='/profile' element={ <Profile />}/> */}

        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
