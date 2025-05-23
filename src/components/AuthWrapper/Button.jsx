// Input.jsx
const Button = ({ text }) => (
  <button className="bg-primary hover:bg-orange-700 transition-all duration-300 cursor-pointer text-white py-2 px-4 rounded w-full">
    <a href="#">
      {text}
    </a>
  </button>
);
export default Button