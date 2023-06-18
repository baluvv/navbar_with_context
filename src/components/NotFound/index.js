import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'not-found-container dark-not-found-container'
                : 'not-found-container'
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1
              className={
                isDarkTheme
                  ? 'not-found-heading dark-not-found-heading'
                  : 'not-found-heading'
              }
            >
              Lost Your Way?
            </h1>
            <p
              className={
                isDarkTheme
                  ? 'not-found-line dark-not-found-line'
                  : 'not-found-line'
              }
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
