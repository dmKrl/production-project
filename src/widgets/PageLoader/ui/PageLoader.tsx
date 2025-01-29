import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { FC } from 'react';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
}