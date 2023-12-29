import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import WithAuth from './components/auth/WithAuth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/protected" element={<WithAuth(ProtectedRoute) />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
