import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <Input label="نام و نام خانوادگی" type="text" />
      <Input label="ایمیل" type="email" />
      <Input label="رمز عبور" type="password" />
      <Button text="ورود" />
    </form>
  );
};

export default RegisterForm;
