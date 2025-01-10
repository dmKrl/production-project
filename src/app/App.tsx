import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/RouterProvider";
import { NavBar } from "widgets/NavBar";


export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>Set theme</button>
      <AppRouter />
    </div>
  )
}
