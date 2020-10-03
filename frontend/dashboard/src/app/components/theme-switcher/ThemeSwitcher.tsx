import React from 'react';
import './ThemeSwitcher.scss';

export const ThemeSwitcher: React.FC = () => {

  return (
    <div onClick={(e) => {
      e.preventDefault();
      const bodyEl = document.getElementsByTagName('body')[0];
      bodyEl.classList.toggle('dark');
    }}
         className="toggle-switch">
      <label className="switch">
        <input type="checkbox" id="switch-style"/>
        <div className="slider round"></div>
      </label>
    </div>
  );
};
