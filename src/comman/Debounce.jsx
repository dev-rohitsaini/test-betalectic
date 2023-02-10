import React, { useState, useEffect } from 'react';

const Debounce = ({ delay, onChange }) => {
  const [value, setValue] = useState('');
  const [debouncing, setDebouncing] = useState(false);

  useEffect(() => {
    if (debouncing) {
      const timeoutId = setTimeout(() => {
        setDebouncing(false);
        onChange(value);
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [debouncing, delay, onChange, value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setDebouncing(true);
  };

  return (
    <input type="text" value={value} placeholder={"Search"} onChange={handleChange} />
  );
};

export default Debounce;