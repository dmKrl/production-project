import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import useTheme from "./theme/useTheme"
import { classNames } from "./helpers/classNames"


export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [`${theme}`])}>
      <button onClick={toggleTheme}>Set theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О Сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>

    </div>
  )
}
