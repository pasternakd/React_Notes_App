import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Create from './pages/create/create'
import Edit from './pages/edit/edit'
import './App.css';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
