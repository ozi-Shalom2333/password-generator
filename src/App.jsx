import { useState, useEffect, useCallback } from 'react';
import { CHAR_SETS } from './components/constants';

import PasswordDisplay from './components/PasswordDisplay';
import LengthSlider from './components/LengthSlider';
import SettingsToggle from './components/SettingsToggle';
import GenerateButton from './components/GenerateButton';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [settings, setSettings] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = useCallback(() => {
    let charPool = '';

    Object.keys(settings).forEach((key) => {
      if (settings[key]) charPool += CHAR_SETS[key];
    });

    if (!charPool) {
      setPassword('Select at least one option');
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charPool[Math.floor(Math.random() * charPool.length)];
    }

    setPassword(result);
  }, [settings, length]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Generate Password
        </h1>

        <PasswordDisplay password={password} />
        <LengthSlider length={length} onChange={setLength} />
        <SettingsToggle settings={settings} onToggle={toggleSetting} />
        <GenerateButton onClick={generatePassword} />
      </div>
    </div>
  );
};

export default App;
