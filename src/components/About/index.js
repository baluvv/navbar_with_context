import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'about-container dark-about-container'
                : 'about-container'
            }
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="about-img"
            />
            <h1
              className={
                isDarkTheme
                  ? 'about-heading dark-about-heading'
                  : 'about-heading'
              }
            >
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
