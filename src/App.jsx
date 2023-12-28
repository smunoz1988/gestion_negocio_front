import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NormalRoute from './components/NormalRoute';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/protected_route' element={<ProtectedRoute />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
