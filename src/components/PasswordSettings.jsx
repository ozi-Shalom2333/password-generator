import Checkbox from './Checkbox';

const PasswordSettings = ({ settings, onToggle }) => {
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
          <Checkbox
            key={key}
            label={label}
            checked={settings[key]}
            onChange={(checked) => onToggle(key, checked)}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordSettings;