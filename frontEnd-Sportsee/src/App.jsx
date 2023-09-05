import Homepage from './Pages/Homepage/Homepage';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/:userId" element={<Profile />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
