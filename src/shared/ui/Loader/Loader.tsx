import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { FC } from 'react';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;

    return (
        <span className={classNames('loader', {}, [className])}>
        </span>
    );
}