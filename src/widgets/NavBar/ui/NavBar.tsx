import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from './NavBar.module.scss'

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (<div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>{t('О Сайте')}</AppLink>
        </div>
    </div>);
};


// + необходимо разобраться с проблемой импортов scss классов в tsx компоненты - нет автокомплита.