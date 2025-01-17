import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/RouterProvider";
import { NavBar } from "widgets/NavBar";
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense } from 'react';


export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback='loading'>
        <NavBar />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
