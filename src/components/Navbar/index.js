import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <ul
          className={
            isDarkTheme ? 'nav-container dark-nav-container' : 'nav-container'
          }
        >
          <li>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              alt="website logo"
              className="website-logo"
            />
          </li>
          <li className="nav-item">
            <Link to="/" className="home-link">
              <h1 className={isDarkTheme ? 'nav-home dark-home' : 'nav-home'}>
                Home
              </h1>
            </Link>
            <Link to="/about" className="about-link">
              <h1
                className={isDarkTheme ? 'nav-about dark-about' : 'nav-about'}
              >
                About
              </h1>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="change-button"
              data-testid="theme"
              onClick={onClickToggleTheme}
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                alt="theme"
                className="theme"
              />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
