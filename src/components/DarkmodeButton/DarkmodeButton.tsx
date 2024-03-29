import { useState } from 'react';
import { HiSun } from 'react-icons/hi';
import { RiMoonFill } from 'react-icons/ri';
import Switch from 'react-switch';
import { useTheme } from 'styled-components';

export const DarkmodeButton = () => {
  const theme = useTheme();
  const {
    themeSwitcher,
    colors: { divider, title },
    light,
  } = theme;
  const [checked, setChecked] = useState(light);

  const handleChange = () => {
    setChecked((p) => !p);
    themeSwitcher();
  };

  return (
    <Switch
      borderRadius={6}
      checked={checked}
      checkedIcon={<RiMoonFill fill={title} size={22} viewBox="-8 -6 50 50" />}
      handleDiameter={14}
      height={16}
      offColor={divider}
      offHandleColor={title}
      onChange={handleChange}
      onColor={divider}
      onHandleColor={title}
      uncheckedIcon={<HiSun fill={title} size={22} viewBox="-11 -3 35 35" />}
      width={36}
    />
  );
};
