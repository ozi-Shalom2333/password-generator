const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;