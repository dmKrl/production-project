import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    sidebarToggle?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, children, onClick, ...otherProps
    } = props;

    return (
        <button
            type='button'
            data-testid={otherProps.sidebarToggle}
            onClick={onClick}
            className={classNames(cls.button, {}, [className, cls[theme]])}>
            {children}
        </button>
    );
};
