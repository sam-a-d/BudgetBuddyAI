import React from 'react';
import MenuItem from './microComponents/menuitem';

const NavSidebar = () => {
      return (
        <nav className="pc-sidebar">
          <div className="navbar-wrapper">
        <div className="m-header">
          <a className="navbar-brand" href="/">BudgetBuddy</a>
        </div>
        <div className="navbar-content">
          <ul className="pc-navbar">
            <li className="pc-item">
              <MenuItem href="#" text="Transactions" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Budgets" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Reports & Insights" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Savings Goals" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Debt Management" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Investment Tracking" />
            </li>
            <li className="pc-item">
              <MenuItem href="#" text="Settings &amp; Preferences" />
            </li>
          </ul>
          <div className="w-100 text-center">
            <div className="badge theme-version badge rounded-pill bg-light text-dark f-12"></div>
          </div>
        </div>
          </div>
        </nav>
      );
    }
export default NavSidebar;