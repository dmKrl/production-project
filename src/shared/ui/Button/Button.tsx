import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    sidebarToggle?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, onClick, sidebarToggle
    } = props;

    return (
        <button
            type='button'
            data-testid={sidebarToggle}
            onClick={onClick}
            className={classNames(cls.button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};
