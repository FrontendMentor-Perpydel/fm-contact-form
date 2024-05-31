import { useState } from "react";

const ThemeController = () => {
  const [selectedTheme, setSelectedTheme] = useState('default');

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <div className="dropdown mb-1 flex justify-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div> 
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-30"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
            checked={selectedTheme === 'default'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            checked={selectedTheme === 'dark'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Bumblebee"
            value="bumblebee"
            checked={selectedTheme === 'bumblebee'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Emerald"
            value="emerald"
            checked={selectedTheme === 'emerald'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Corporate"
            value="corporate"
            checked={selectedTheme === 'corporate'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Synthwave"
            value="synthwave"
            checked={selectedTheme === 'synthwave'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            checked={selectedTheme === 'retro'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            checked={selectedTheme === 'cyberpunk'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            checked={selectedTheme === 'valentine'}
            onChange={handleThemeChange}
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Halloween"
            value="halloween"
            checked={selectedTheme === 'halloween'}
            onChange={handleThemeChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeController;
