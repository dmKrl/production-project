import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features';
import { LangSwitcher } from 'entities';
import { AppLink, Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/main-20-20.svg';
import AboutIcon from 'shared/assets/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    // Проблема ошибки Storybook - в LangSwitcher
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.items}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О Сайте')}</span>
                </AppLink>
            </div>
            <div className={classNames(cls.switchers, {}, [])}>
                {/* <LangSwitcher short={collapsed} className={cls.lang} /> */}
                <ThemeSwitcher />
                <Button
                    sidebarToggle='sidebar-toggle'
                    onClick={onToggle}
                    className={classNames(cls.sidebarToggleButton, {}, [])}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    square
                >
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
        </div>
    );
};
