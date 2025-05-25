// Input.jsx
// const Input = ({ label, type , placeholder }) => (
//   <div className="flex flex-col text-right">
//     <label className="text-sm mb-1">{label}</label>
//     <input type={type} placeholder={placeholder} className="p-2 mt-2 rounded-lg border border-Neutral868686 outline-none text-sm" />
//   </div>
// );
// export default Input

// const Input = ({ label, type, placeholder, value, onChange }) => (
//   <div className="flex flex-col text-right">
//     <label className="text-sm mb-1">{label}</label>
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="p-2 mt-2 rounded-lg border border-Neutral868686 outline-none text-sm"
//     />
//   </div>
// );

// export default Input;

import { IoIosClose } from "react-icons/io";

const Input = ({ label, type, placeholder, value, onChange, isValid, errorMessage, onClear }) => {
  const borderColor = isValid === null ? "border-gray-400" : isValid ? "border-green-500" : "border-red-500";
  const bgColor = isValid === null ? "" : isValid ? "bg-green-50" : "bg-red-50";
  // const textColor = isValid === false ? "text-red-500" : "";

  return (
    <div className="flex flex-col text-right space-y-1">
      <label className="text-sm">{label}</label>
      
      <div className={`relative`}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2 pr-3 rounded-lg border ${borderColor} ${bgColor} outline-none text-sm`}
        />
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-red-500"
          >
            <IoIosClose size={20} className=" cursor-pointer hover:scale-125 transition-all duration-300" />
          </button>
        )}
      </div>

      {isValid === false && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
