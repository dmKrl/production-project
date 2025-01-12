import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features';

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
                <ThemeSwitcher />
                <button onClick={onToggle}>Toggle</button>
            </div>
        </div>
    );
}