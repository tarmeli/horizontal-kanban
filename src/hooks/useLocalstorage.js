import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item || initialValue;
  });

  const setValue = (value) => {
    const valueToStore =
        value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, valueToStore);
  };

  return [storedValue, setValue];
};

export { useLocalStorage };
