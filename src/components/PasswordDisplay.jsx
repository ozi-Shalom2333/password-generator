import { useState } from 'react';

const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password || password.includes('Select')) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy');
    }
  };

  return (
    <div className="mb-8">
      <div className="relative bg-gray-100 border-2 border-gray-300 rounded-xl p-5 pr-28"> {/* Increased pr-28 (~112px) to reserve space for button */}
        <p
          className={`text-2xl font-mono tracking-wide text-center select-all truncate
            ${!password ? 'text-gray-500' : ''}`}
          title={password}
        >
          {password || 'Your secure password will appear here'}
        </p>


        <button
          onClick={handleCopy}
          disabled={!password || password.includes('Select')}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600 font-semibold hover:underline focus:outline-none disabled:text-gray-400"
          aria-label="Copy password to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="text-gray-600 text-center text-sm mt-2">
        {password && 'Hover to see full password • Click to copy'}
      </p>
    </div>
  );
};

export default PasswordDisplay;