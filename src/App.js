import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Vulnerabilities from "./Components/Vulnerabilities/Vulnerabilities";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vulnerabilities" element={<Vulnerabilities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
