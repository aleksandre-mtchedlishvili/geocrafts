import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Registration } from './pages/registration';
import { Login } from './pages/login';
import RequireAuth from './features/auth/requireAuth';

function App() {
  return (
    <Routes>
      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path='/' element={<Home />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
    </Routes>
  );
}

export default App;