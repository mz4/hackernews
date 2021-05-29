const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <span className="side-nav__name">
                New
            </span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <span className="side-nav__name">
                Past
            </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;