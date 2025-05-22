import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import LoginForm from "../components/AuthWrapper/LoginForm";

const LoginPage = () => {
  return (
    <AuthWrapper title="ورود | ثبت نام">
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
