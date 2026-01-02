const GenerateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg"
    >
      Generate Password
    </button>
  );
};

export default GenerateButton;
