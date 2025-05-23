import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <Input label="نام و نام خانوادگی" type="text" placeholder="username"/>
      <Input label="ایمیل" type="email" placeholder="user@gmail.com"/>
      <Input label="رمز عبور" type="password" placeholder="password"/>
      <Button text="ورود" />
    </form>
  );
};

export default RegisterForm;
