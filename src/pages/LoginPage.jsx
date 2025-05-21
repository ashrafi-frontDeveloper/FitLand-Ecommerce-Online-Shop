import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import LoginForm from "../components/AuthWrapper/LoginForm";

const LoginPage = () => {
  return (
    <AuthWrapper title="ورود به حساب">
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
