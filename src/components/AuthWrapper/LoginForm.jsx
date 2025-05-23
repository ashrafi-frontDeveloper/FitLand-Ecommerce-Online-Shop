import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <Input label="لطفا شماره موبایل یا ایمیل خود را وارد کنید" type="email" placeholder="Example@gmail.com یا *********09" />
      <Button text="ادامه" />
    </form>
  );
};

export default LoginForm;
