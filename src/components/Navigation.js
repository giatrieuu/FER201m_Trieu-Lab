import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><a className='active' href='/'>Home</a></li>
          <li><a href='#news'>News</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className="switch-mode-container">
          <label className="switch">
            <input type="checkbox" checked={dark} onChange={toggle} />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </div>
  );
}
