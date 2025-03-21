import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <div className={cls.loginInputsBlock}>
                <Input type="text" nameInput={t('Введите username')} />
                <Input type="text" nameInput={t('Введите password')} />
            </div>
            <Button theme={ButtonTheme.OUTLINE}>{t('Войти')}</Button>
        </div>
    );
};
