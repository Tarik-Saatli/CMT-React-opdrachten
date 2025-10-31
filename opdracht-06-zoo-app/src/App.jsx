import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePages from './Pages/HomePages';
import AnimalDetail from './Pages/AnimalDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/animal/:animalId" element={<AnimalDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
