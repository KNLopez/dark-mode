import React, { useEffect, useState } from 'react';
import Theme from '../../context/theme-context';

export default function App({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.querySelector('html').classList.toggle('dark-mode', isDark);
  }, [isDark]);
  return (
    <Theme.Provider value={{ isDark, toggleTheme }}>{children}</Theme.Provider>
  );
}
