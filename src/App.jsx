import './App.css'
import LandingPage from './components/LandingPage';
import LoginPage from './components/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
