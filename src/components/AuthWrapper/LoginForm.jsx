import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <Input label="ایمیل" type="email" />
      <Input label="رمز عبور" type="password" />
      <Button text="ورود" />
    </form>
  );
};

export default LoginForm;
