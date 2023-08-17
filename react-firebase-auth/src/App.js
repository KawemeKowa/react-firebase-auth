import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
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
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
