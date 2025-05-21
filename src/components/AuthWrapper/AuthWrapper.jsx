const AuthWrapper = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-sm w-full bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};
export default AuthWrapper