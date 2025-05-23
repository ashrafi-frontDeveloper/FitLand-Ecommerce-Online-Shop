import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* صفحات اصلی */}
      <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
      }/>

      {/* صفحات فرم‌ها */}
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
    </Routes>
  );
}
