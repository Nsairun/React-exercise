import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LandingPage from './components/page/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
