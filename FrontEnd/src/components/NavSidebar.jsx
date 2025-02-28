const NavSidebar = () => {
    return(
      <nav className="pc-sidebar">
      <div className="navbar-wrapper">
        <div className="m-header">
          <a className="navbar-brand" href="/">BudgetBuddy</a>
        </div>
        <div className="navbar-content">
          <ul className="pc-navbar">
            <li className="pc-item pc-caption">
              <label>Dashboard</label>
              <i className="ti ti-dashboard"></i>
            </li>
            <li className="pc-item">
              <a href="#" className="pc-link"
                ><span className="pc-micon"><i className="ti ti-dashboard"></i></span><span className="pc-mtext">Default</span></a
              >
            </li>

            <li className="pc-item">
              <a className="pc-link" target="_blank" href="#">
                <span className="pc-micon"><i className="ti ti-lock"></i></span>
                <span className="pc-mtext">Login</span>
              </a>
            </li>
            <li className="pc-item">
              <a href="#" target="_blank" className="pc-link">
                <span className="pc-micon"><i className="ti ti-user-plus"></i></span>
                <span className="pc-mtext">Register</span>
              </a>
            </li>

          </ul>

          <div className="w-100 text-center">
            <div className="badge theme-version badge rounded-pill bg-light text-dark f-12"></div>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavSidebar;