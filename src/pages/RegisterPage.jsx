import AuthWrapper from "../components/AuthWrapper/AuthWrapper";
import RegisterForm from "../components/AuthWrapper/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthWrapper title="ثبت نام حساب کاربری">
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
