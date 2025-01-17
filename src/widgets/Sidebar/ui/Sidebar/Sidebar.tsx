import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features';
import { LangSwitcher } from 'entities/ui/LangSwitcher';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.switchers, {}, [])}>
                <LangSwitcher />
                <ThemeSwitcher />
                <Button onClick={onToggle} theme={ThemeButton.CLEAR}>Toggle</Button>
            </div>
        </div>
    );
}