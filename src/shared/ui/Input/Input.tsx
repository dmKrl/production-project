import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type InputExtends = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

interface InputProps extends InputExtends {
    className?: string;
    nameInput?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const { className, type, value, nameInput, onChange } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <span>{nameInput}</span>
            <input type={type} value={value} onChange={onChangeHandler} />
        </div>
    );
});
