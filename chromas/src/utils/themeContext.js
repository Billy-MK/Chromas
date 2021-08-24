import React from 'react';

const ThemeContext = React.createContext({
    primaryColor: 'fff',
    secondaryColor: 'fff',
    accentColor: 'fff',
    backgroundColor: 'fff'
  });

export default ThemeContext;