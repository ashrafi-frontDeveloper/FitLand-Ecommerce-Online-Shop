// Input.jsx
const Input = ({ label, type }) => (
  <div className="flex flex-col text-right">
    <label className="text-sm mb-1">{label}</label>
    <input type={type} className="p-2 rounded bg-gray-700 text-white" />
  </div>
);
export default Input