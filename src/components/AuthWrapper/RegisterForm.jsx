import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length > 2;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "password":
        return value.length >= 6;
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validateField(name, value);

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: isValid });
  };

  const handleClear = (field) => {
    setForm({ ...form, [field]: "" });
    setErrors({ ...errors, [field]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      password: validateField("password", form.password),
    };
    setErrors(newErrors);

    const isFormValid = Object.values(newErrors).every(Boolean);
    if (isFormValid) {
      console.log("فرم ثبت‌نام معتبر است:", form);
      // ارسال اطلاعات به سرور یا مرحله بعد
    }
  };

  return (
    <form className="border-s-Neutral868686 shadow-2xl rounded-xl p-4"  onSubmit={handleSubmit}>
      <Input
        label="نام و نام خانوادگی"
        type="text"
        placeholder="username"
        name="name"
        value={form.name}
        onChange={handleChange}
        isValid={errors.name}
        errorMessage="حداقل باید ۳ حرف وارد شود"
        onClear={() => handleClear("name")}
      />
      <Input
        label="ایمیل"
        type="email"
        placeholder="user@gmail.com"
        name="email"
        value={form.email}
        onChange={handleChange}
        isValid={errors.email}
        errorMessage="ایمیل وارد شده معتبر نیست"
        onClear={() => handleClear("email")}
      />
      <Input
        label="رمز عبور"
        type="password"
        placeholder="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        isValid={errors.password}
        errorMessage="رمز باید حداقل ۶ کاراکتر باشد"
        onClear={() => handleClear("password")}
      />
      <Button text="ورود" />
      <div className="mt-5 flex items-center">
        <Input type="checkbox" />
        <p className="text-[12px] pr-2"><a href="#" className="text-sky-500">قوانین</a> و <a href="#" className="text-sky-500">مقررات</a> را خوانده و قبول دارم.</p>
      </div>
    </form>
  );
};

export default RegisterForm;
