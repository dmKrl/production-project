import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={translate}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}>
            {t('Язык')}
        </Button>
    );
};
