import { useState } from "react";
import logo from "./logo.png";
import avatar from "./Group 128.svg";
import profile from "./Group 128.svg";
import fd from "./Group 129.svg";
import transactions from "./Group 130.svg";
import logout from "./Group 151.svg";
import "./Navbar.css";
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const onToggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
        <div className="Navbar">
        <ul>
          <li>
            <ul className="flexstart">
              <li>
                <img src={logo} className="icons" alt="" />
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Dashboard</li>
              <li>FAQs</li>
              <li>Support</li>
              <li>
                <div className="avatar" onClick={onToggleDropdown}>
                  <img src={avatar} alt="avtar" />
                  <span className="arrow">{dropdownVisible ? "▲" : "▼"}</span>
                  {dropdownVisible && (
                    <div className="dropdown-content">
                      <a href="#profile">
                        <img
                          src={profile} 
                          alt="Profile"
                          className="dropdown-icon"
                        />
                        My Profile
                      </a>
                      <a href="#fds">
                        <img
                          src={fd} 
                          alt="FDs"
                          className="dropdown-icon"
                        />
                        My FDs
                      </a>
                      <a href="#transactions">
                        <img
                          src={transactions} 
                          alt="transactions"
                          className="dropdown-icon"
                        />
                        My Transactions
                      </a>
                      <a href="#logout">
                        <img
                          src={logout} 
                          alt="Logout"
                          className="dropdown-icon"
                        />
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );
};
export default Navbar;
