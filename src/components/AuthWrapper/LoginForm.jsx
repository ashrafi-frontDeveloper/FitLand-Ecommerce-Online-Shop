import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = () => {
    const phoneRegex = /^09\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneRegex.test(userInput)) {
      setIsValid(true);
      setErrorMessage("");
    } else if (emailRegex.test(userInput)) {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      if (userInput.includes("@")) {
        setErrorMessage("ایمیل شما اشتباه است");
      } else {
        setErrorMessage("لطفا شماره همراه خود را به صورت صحیح وارد نمایید");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput();
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
    setIsValid(null);
    setErrorMessage("");
  };

  const clearInput = () => {
    setUserInput("");
    setIsValid(null);
    setErrorMessage("");
  };

  return (
    <form className="space-y-4 border-s-Neutral868686 text-white shadow-2xl rounded-xl p-4" onSubmit={handleSubmit}>
      <Input
        label="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
        type="text"
        name="login"
        placeholder="Example@gmail.com یا ******09"
        value={userInput}
        onChange={handleChange}
        isValid={isValid}
        errorMessage={errorMessage}
        onClear={clearInput}
      />
      <Button text="ادامه" />
    </form>
  );
};

export default LoginForm;
