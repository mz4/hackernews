import logo from '../../images/hacker-news-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img src={logo} alt="logo" className="title__logo" />
        <span className="title__name">Hacker News</span>
      </div>
      <div className="login">
        Login
      </div>
    </div>
  )
}

export default Header;