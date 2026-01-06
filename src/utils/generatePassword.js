import { CHAR_SETS } from './charSets';

export const generatePassword = (length, settings) => {
  const chars = [];

  Object.entries(settings).forEach(([type, enabled]) => {
    if (enabled) {
      chars.push(...CHAR_SETS[type]);
    }
  });

  if (chars.length === 0) {
    return 'Select at least one option';
  }

  // Better randomness than Math.random
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return Array.from(array, (byte) => chars[byte % chars.length]).join('');
};