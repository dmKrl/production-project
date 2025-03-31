import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { initAuthData } from 'entityes/User/model/slices/User.slice';
import { NavBar } from 'widgets/NavBar';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/RouterProvider';
import { useAppDispatch } from './providers/StoreProvider/hooks/redux';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.className = theme;
        dispatch(initAuthData());
    }, [theme, dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
