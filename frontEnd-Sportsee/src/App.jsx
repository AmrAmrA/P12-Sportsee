import Homepage from './Pages/Homepage/Homepage';
import ErrorPage from './Pages/Error/Error';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  )
}

export default App
