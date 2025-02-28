import { Component } from "react";

class PCHeader extends Component {

  render(){
    return(
<header className="pc-header">
  <div className="header-wrapper">
<div className="me-auto pc-mob-drp">
  <ul className="list-unstyled">
    <li className="pc-h-item header-mobile-collapse">
      <a href="#" className="pc-head-link head-link-secondary ms-0" id="sidebar-hide">
        <i className="ti ti-menu-2"></i>
      </a>
    </li>
    <li className="pc-h-item pc-sidebar-popup">
      <a href="#" className="pc-head-link head-link-secondary ms-0" id="mobile-collapse">
        <i className="ti ti-menu-2"></i>
      </a>
    </li>
    <li className="dropdown pc-h-item d-inline-flex d-md-none">
      <a
        className="pc-head-link head-link-secondary dropdown-toggle arrow-none m-0"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <i className="ti ti-search"></i>
      </a>
      <div className="dropdown-menu pc-h-dropdown drp-search">
        <form className="px-3">
          <div className="mb-0 d-flex align-items-center">
            <i data-feather="search"></i>
            <input type="search" className="form-control border-0 shadow-none" placeholder="Search here. . ." />
          </div>
        </form>
      </div>
    </li>
    <li className="pc-h-item d-none d-md-inline-flex">
      <form className="header-search">
        <i data-feather="search" className="icon-search"></i>
        <input type="search" className="form-control" placeholder="Search here. . ." />
        <button className="btn btn-light-secondary btn-search"><i className="ti ti-adjustments-horizontal"></i></button>
      </form>
    </li>
  </ul>
</div>
<div className="ms-auto">
  <ul className="list-unstyled">
    <li className="dropdown pc-h-item">
      <a
        className="pc-head-link head-link-secondary dropdown-toggle arrow-none me-0"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <i className="ti ti-bell"></i>
      </a>
      <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
        <div className="dropdown-header">
          <a href="#!" className="link-primary float-end text-decoration-underline">Mark as all read</a>
          <h5>
            All Notification
            <span className="badge bg-warning rounded-pill ms-1">01</span>
          </h5>
        </div>
        <div className="dropdown-header px-0 text-wrap header-notification-scroll position-relative" >
          <div className="list-group list-group-flush w-100">
            <div className="list-group-item list-group-item-action">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="user-avtar bg-light-success"><i className="ti ti-building-store"></i></div>
                </div>
                <div className="flex-grow-1 ms-1">
                  <span className="float-end text-muted">3 min ago</span>
                  <h5>Store Verification Done</h5>
                  <p className="text-body fs-6">We have successfully received your request.</p>
                  <div className="badge rounded-pill bg-light-danger">Unread</div>
                </div>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="../assets/images/user/avatar-3.jpg" alt="user-image" className="user-avtar" />
                </div>
                <div className="flex-grow-1 ms-1">
                  <span className="float-end text-muted">10 min ago</span>
                  <h5>Joseph William</h5>
                  <p className="text-body fs-6">It is a long established fact that a reader will be distracted</p>
                  <div className="badge rounded-pill bg-light-success">Confirmation of Account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <div className="text-center py-2">
          <a href="#!" className="link-primary">Mark as all read</a>
        </div>
      </div>
    </li>
    <li className="dropdown pc-h-item header-user-profile">
      <a
        className="pc-head-link head-link-primary dropdown-toggle arrow-none me-0"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <img src="../assets/images/user/avatar-2.jpg" alt="user-image" className="user-avtar" />
        <span>
          <i className="ti ti-settings"></i>
        </span>
      </a>
      <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
        <div className="dropdown-header">
          <h4>
            Good Morning,
            <span className="small text-muted">John Doe</span>
          </h4>
          <p className="text-muted">Project Admin</p>
          <hr />
          <div className="profile-notification-scroll position-relative">
            <div className="upgradeplan-block bg-light-warning rounded">
              <h4>Explore full code</h4>
              <p className="text-muted">Buy now to get full access of code files</p>
              <a href="https://codedthemes.com/item/berry-bootstrap-5-admin-template/" target="_blank" className="btn btn-warning">Buy Now</a>
            </div>
            <hr />
            <a href="../application/account-profile-v1.html" className="dropdown-item">
              <i className="ti ti-settings"></i>
              <span>Account Settings</span>
            </a>
            <a href="../application/social-profile.html" className="dropdown-item">
              <i className="ti ti-user"></i>
              <span>Social Profile</span>
            </a>
            <a href="../pages/login-v1.html" className="dropdown-item">
              <i className="ti ti-logout"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</div>
</header>
    )
  }
  
}

export default PCHeader;