import { IoIosClose } from "react-icons/io";

const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  isValid,
  errorMessage,
  onClear,
}) => {
  const borderColor =
    isValid === null
      ? "border-Neutral868686"
      : isValid
      ? "border-green-500"
      : "border-red-500";

  return (
    <div className="flex flex-col text-right relative text-white">
      {label && <label className="text-sm mb-1">{label}</label>}
      <div className="relative">
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`p-2 text-white mt-2 rounded-lg border ${borderColor} outline-none w-full text-sm`}
        />
        {value && (
          <IoIosClose
            size={24}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-block cursor-pointer"
            onClick={onClear}
          />
        )}
      </div>
      {isValid === false && (
        <span className="text-red-800 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
