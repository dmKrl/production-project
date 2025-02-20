import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features';
import { LangSwitcher } from 'entities/ui/LangSwitcher';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.switchers, {}, [])}>
                <LangSwitcher />
                <ThemeSwitcher />
                <Button 
                    sidebarToggle='sidebar-toggle'
                    onClick={onToggle}
                    theme={ThemeButton.CLEAR}>
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
        </div>
    );
};
