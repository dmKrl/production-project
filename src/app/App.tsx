import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/RouterProvider";
import { NavBar } from "widgets/NavBar";
import { useTheme } from 'shared/lib/useTheme/useTheme';


export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
}
