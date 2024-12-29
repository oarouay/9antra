import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <Router>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main>
    </Router>
  )
}

export default App
