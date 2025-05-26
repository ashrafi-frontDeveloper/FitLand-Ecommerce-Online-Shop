import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import NotFound from "../components/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
      }/>

      {/* Form Page */}
      <Route path="/login" element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }/>

      <Route path="/register" element={
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        }/>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
