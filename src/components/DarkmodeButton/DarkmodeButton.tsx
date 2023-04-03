import { useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';

// https://react-switch.netlify.app/

export const DarkmodeButton = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const {
    themeSwitcher,
    colors: { link, title },
  } = theme;

  const handleChange = () => {
    setChecked((p) => !p);
    themeSwitcher();
  };

  return (
    <Switch
      borderRadius={12}
      checked={checked}
      handleDiameter={24}
      offColor={link}
      offHandleColor={title}
      onChange={handleChange}
      onColor={link}
      onHandleColor={title}
      checkedIcon={
        <svg viewBox="-8 -11 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.9998" cy="11.9998" fill={title} r="5.75375" />
          <g>
            <circle
              cx="3.08982"
              cy="6.85502"
              fill={title}
              r="1.71143"
              transform="rotate(-60 3.08982 6.85502)"
            />
            <circle
              cx="3.0903"
              cy="17.1436"
              fill={title}
              r="1.71143"
              transform="rotate(-120 3.0903 17.1436)"
            />
            <circle cx="12" cy="22.2881" fill={title} r="1.71143" />
            <circle
              cx="20.9101"
              cy="17.1436"
              fill={title}
              r="1.71143"
              transform="rotate(-60 20.9101 17.1436)"
            />
            <circle
              cx="20.9101"
              cy="6.8555"
              fill={title}
              r="1.71143"
              transform="rotate(-120 20.9101 6.8555)"
            />
            <circle cx="12" cy="1.71143" fill={title} r="1.71143" />
          </g>
        </svg>
      }
      uncheckedIcon={
        // <svg viewBox="-8 -5 65 65" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="-20 -11 79 79" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
            fill={title}
          />
        </svg>
      }
    />
  );
};
