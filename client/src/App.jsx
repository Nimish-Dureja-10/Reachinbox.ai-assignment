import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Onebox from './pages/Onebox';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/onebox' element={<Onebox />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
