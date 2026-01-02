const PasswordDisplay = ({ password }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="mb-8">
      <div
        onClick={copyToClipboard}
        className="bg-gray-100 border-2 border-gray-300 rounded-xl p-5 mb-3 cursor-pointer hover:bg-gray-50 transition"
      >
        <p className="text-2xl font-mono text-center tracking-wide select-all">
          {password}
        </p>
      </div>
      <p className="text-gray-600 text-center text-sm">Click to copy</p>
    </div>
  );
};

export default PasswordDisplay;
