// Input.jsx
// const Input = ({ label, type , placeholder }) => (
//   <div className="flex flex-col text-right">
//     <label className="text-sm mb-1">{label}</label>
//     <input type={type} placeholder={placeholder} className="p-2 mt-2 rounded-lg border border-Neutral868686 outline-none text-sm" />
//   </div>
// );
// export default Input

const Input = ({ label, type, placeholder, value, onChange }) => (
  <div className="flex flex-col text-right">
    <label className="text-sm mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 mt-2 rounded-lg border border-Neutral868686 outline-none text-sm"
    />
  </div>
);

export default Input;
