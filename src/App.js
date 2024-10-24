import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LetsGoPage from './Pages/LetsGoPage';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letsgo" component={<LetsGoPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
