import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features';
import { LangSwitcher } from 'entities';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    // Проблема ошибки Storybook - в LangSwitcher
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.switchers, {}, [])}>
                {/* <LangSwitcher className={cls.lang} /> */}
                <ThemeSwitcher />
                <Button
                    sidebarToggle='sidebar-toggle'
                    onClick={onToggle}
                    className={classNames(cls.sidebarToggleButton, {}, [])}
                    theme={ThemeButton.CLEAR}>
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
        </div>
    );
};
