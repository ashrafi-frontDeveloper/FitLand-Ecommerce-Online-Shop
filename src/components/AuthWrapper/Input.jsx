// Input.jsx
const Input = ({ label, type }) => (
  <div className="flex flex-col text-right">
    <label className="text-sm mb-1">{label}</label>
    <input type={type} placeholder="*********09 یا Example@gmail.com" className="p-2 mt-2 rounded-lg border border-Neutral868686 outline-none text-sm" />
  </div>
);
export default Input