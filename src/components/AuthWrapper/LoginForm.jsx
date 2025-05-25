// // import Input from "./Input";
// // import Button from "./Button";
// // import { IoIosClose } from "react-icons/io";

// // const LoginForm = () => {


// //   return (
// //     <form className="space-y-4">
// //       <Input label="لطفا شماره موبایل یا ایمیل خود را وارد کنید" value='' type="email" placeholder="Example@gmail.com یا *********09" />
// //       <Button text="ادامه" />
// //     </form>
// //   );
// // };

// // export default LoginForm;
// import { useState } from "react";
// import Input from "./Input";
// import Button from "./Button";
// import { IoIosClose } from "react-icons/io";

// const LoginForm = ({ onClose }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");

//   // اعتبارسنجی ورودی: ایمیل یا شماره موبایل
//   const isEmail = (input) => /\S+@\S+\.\S+/.test(input);
//   const isPhone = (input) => /^09\d{9}$/.test(input);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isEmail(inputValue) || isPhone(inputValue)) {
//       setError("");
//       // اینجا می‌تونی بعداً کارهای بعدی مثل ارسال به بک‌اند یا رفتن به مرحله بعد رو انجام بدی
//       console.log("ورودی معتبره:", inputValue);
//     } else {
//       setError("لطفاً یک ایمیل یا شماره موبایل معتبر وارد کنید.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 relative p-6 border rounded-lg bg-white shadow-md w-full max-w-sm mx-auto">
//       {/* دکمه بستن */}
//       {onClose && (
//         <button type="button" onClick={onClose} className="absolute top-2 left-2 text-gray-600 hover:text-red-500 text-xl">
//           <IoIosClose className="bg-black w-10 h-10" />
//         </button>
//       )}

//       {/* ورودی */}
//       <Input label="لطفاً شماره موبایل یا ایمیل خود را وارد کنید" value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Example@gmail.com یا 09xxxxxxxxx"/>

//       {/* نمایش خطا */}
//       {error && <p className="text-red-600 text-sm">{error}</p>}

//       {/* دکمه ادامه */}
//       <Button text="ادامه" />
//     </form>
//   );
// };

// export default LoginForm;



import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validateInput = (value) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = /^09\d{9}$/.test(value);
    return isEmail || isPhone;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(validateInput(value));
  };

  const handleClear = () => {
    setInputValue("");
    setIsValid(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateInput(inputValue);
    setIsValid(valid);
    if (valid) {
      // ادامه فرایند ورود یا ثبت‌نام
      console.log("ورودی معتبر:", inputValue);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        label="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
        type="text"
        placeholder="Example@gmail.com یا *********09"
        value={inputValue}
        onChange={handleChange}
        isValid={isValid}
        errorMessage="لطفا شماره همراه خود را به صورت صحیح وارد نمایید"
        onClear={handleClear}
      />
      <Button text="ادامه" />
    </form>
  );
};

export default LoginForm;
