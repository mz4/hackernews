import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="side-nav">
          <li className="side-nav__item">
            <NavLink to="/top" className="side-nav__link" activeClassName="side-nav__link--active">
              <span className="side-nav__name">
                Top stories
              </span>
            </NavLink>
          </li>
          <li className="side-nav__item">
            <NavLink to="/best" className="side-nav__link" activeClassName="side-nav__link--active">
              <span className="side-nav__name">
                Best stories
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;