const Button = ({ text }) => (
  <button type="submit" className="mt-5 bg-primary hover:bg-orange-700 transition-all duration-300 cursor-pointer text-white py-2 px-4 rounded w-full">
    {text}
  </button>
);

export default Button;
