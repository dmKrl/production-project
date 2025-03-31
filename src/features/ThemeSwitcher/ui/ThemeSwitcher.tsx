import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { Theme } from 'shared/lib/useTheme/ThemeContext';
import LightIcon from 'features/assets/icons/theme-dark.svg';
import DarkIcon from 'features/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>

    );
};
