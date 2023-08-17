import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                {' '}
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route exact path="/" element={<PrivateRoute />}>
                {' '}
                <Route path="/update-profile" element={<UpdateProfile />} />
              </Route>

              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
