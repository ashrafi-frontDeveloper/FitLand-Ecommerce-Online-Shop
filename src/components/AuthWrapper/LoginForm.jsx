import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <Input label="لطفا شماره موبایل یا ایمیل خود را وارد کنید" type="email" />
      {/* <Input label="ایمیل" type="email" />
      <Input label="رمز عبور" type="password" /> */}
      <Button text="ادامه" />
    </form>
  );
};

export default LoginForm;
