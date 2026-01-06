import { useState, useEffect } from 'react';
import { generatePassword } from './utils/generatePassword';

import PasswordDisplay from './components/PasswordDisplay';
import Slider from './components/Slider';
import PasswordSettings from './components/PasswordSettings';
import Button from './components/Button';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const handleGenerate = () => {
    setPassword(generatePassword(length, settings));
  };

  // Auto-regenerate on settings/length change (original feature preserved)
  useEffect(() => {
    handleGenerate();
  }, [length, settings]);

  const handleToggle = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Generate Password
        </h1>

        <PasswordDisplay password={password} />

        <Slider value={length} onChange={setLength} />

        <PasswordSettings settings={settings} onToggle={handleToggle} />

        <Button onClick={handleGenerate}>Generate Password</Button>
      </div>
    </div>
  );
};

export default App;