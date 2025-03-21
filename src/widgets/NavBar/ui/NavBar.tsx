import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features';
import { Button } from 'shared/ui';
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
                <LoginModal isOpen={isAuthOpen} onClose={handleIsAuthOpen} />
            </div>
        </div>
    );
};
