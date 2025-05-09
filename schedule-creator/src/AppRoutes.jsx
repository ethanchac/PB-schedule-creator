import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from "./Components/Layout";
import App from "./Components/App.jsx";
import Custom from "./Components/Custom.jsx";
import Login from './Components/Login';
import Signup from './Components/Signup';

// Route protection component
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <Layout>{children}</Layout>;
};

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/custom" 
          element={
            <PrivateRoute>
              <Custom />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          } 
        />
      </Routes>
    </AuthProvider>
  );
}

export default AppRoutes;