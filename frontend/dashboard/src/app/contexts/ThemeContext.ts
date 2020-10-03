import React from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  setTheme: (value: string) => {}
});

export default ThemeContext;
