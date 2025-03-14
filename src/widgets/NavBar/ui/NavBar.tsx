import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Button, Modal } from 'shared/ui';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleIsAuthOpen = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, [setIsAuthOpen]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleIsAuthOpen}>
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthOpen} onClose={handleIsAuthOpen}>
                    {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque corrupti autem nam ducimus eius ? Harum repellendus quo consequuntur!
                    Assumenda est voluptatem,
                        expedita non officia ullam facere tempore iusto odit ut!`)}
                </Modal>
            </div>
        </div>
    );
};
