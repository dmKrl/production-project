import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Button } from 'shared/ui';
import { LoginModal } from 'features/AuthByUsername';
import { logout } from 'entityes/User/model/slices/User.slice';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks/redux';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { authData } = useAppSelector((state) => state.user);
    const dispacth = useAppDispatch();

    const handleIsAuthOpen = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, [setIsAuthOpen]);

    const onLogout = useCallback(() => {
        dispacth(logout());
    }, [dispacth]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );
    }

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
