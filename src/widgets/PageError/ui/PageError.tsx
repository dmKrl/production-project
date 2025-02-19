import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка, перезагрузите страницу</p>
            <Button onClick={reloadPage}>Перезагрузить страницу</Button>
        </div>
    );
};
