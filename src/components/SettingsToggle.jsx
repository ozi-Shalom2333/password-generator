const SettingsToggle = ({ settings, onToggle }) => {
  const options = [
    { key: 'uppercase', label: 'Include uppercase letters' },
    { key: 'lowercase', label: 'Include lowercase letters' },
    { key: 'numbers', label: 'Include numbers' },
    { key: 'symbols', label: 'Include symbols' },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-5">SETTINGS</h2>

      <div className="space-y-4">
        {options.map(({ key, label }) => (
          <div key={key} className="flex items-center">
            <button
              onClick={() => onToggle(key)}
              className={`w-5 h-5 rounded-md border-2 mr-3 flex items-center justify-center
                ${settings[key] ? 'bg-blue-600 border-blue-600' : 'border-gray-400'}
              `}
            >
              {settings[key] && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsToggle;
