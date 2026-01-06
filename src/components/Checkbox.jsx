const Checkbox = ({ label, checked, onChange }) => {
  const id = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
      />
      <label htmlFor={id} className="ml-3 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;