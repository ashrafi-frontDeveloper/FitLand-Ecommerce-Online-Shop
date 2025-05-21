import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import RegisterForm from "../components/AuthWrapper/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthWrapper title="ورود به حساب">
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
