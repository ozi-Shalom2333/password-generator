const LengthSlider = ({ length, onChange }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-3">
        <span className="font-medium">CHARACTER LENGTH:</span>
        <span className="text-xl font-bold text-blue-600">{length}</span>
      </div>

      <input
        type="range"
        min="6"
        max="32"
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default LengthSlider;
