const Slider = ({ label = 'Character length', value, onChange, min = 6, max = 32 }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-3">
        <span className="font-medium">{label.toUpperCase()}:</span>
        <span className="text-xl font-bold text-blue-600">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default Slider;