import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './container/Navbar';
import Login from './pages/Login';
import Onebox from './pages/Onebox';

function App() {
  const user = false;
  return (
    <div>
      <Navbar />
      <Routes>
        {
          user ? <Route path='/' element={<Onebox />} /> : <Route path='/' element={<Login />} />
        }
      </Routes>
    </div>
  );
}

export default App;
