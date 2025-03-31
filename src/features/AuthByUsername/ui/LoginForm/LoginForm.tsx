import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { Button, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks/redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TextTheme } from 'shared/ui/Text/Text';
import { setPassword, setUsername } from '../../model/slices/Login.slice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { username, password, isLoading, error } = useAppSelector((state) => state.login);
    const dispatch = useAppDispatch();

    const handerOnChangeUsername = useCallback((value: string) => {
        dispatch(setUsername(value));
    }, [dispatch]);

    const handerOnChangePassword = useCallback((value: string) => {
        dispatch(setPassword(value));
    }, [dispatch]);

    const handerLoginOnClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            <div className={cls.loginInputsBlock}>
                <Input
                    onChange={handerOnChangeUsername}
                    value={username}
                    type="text"
                    nameInput={t('Введите username')}
                />
                <Input
                    onChange={handerOnChangePassword}
                    value={password}
                    type="text"
                    nameInput={t('Введите password')}
                />
            </div>
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Button
                disabled={isLoading}
                onClick={handerLoginOnClick}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
