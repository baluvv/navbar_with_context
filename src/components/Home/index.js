import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'home-container dark-home-container'
                : 'home-container'
            }
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
              className="home-img"
            />
            <h1
              className={
                isDarkTheme ? 'home-heading dark-home-heading' : 'home-heading'
              }
            >
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
