import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import './header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
    <div className="navbar bg-base-100 max-w-5xl m-auto">
      <div className="navbar-start">

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li> <NavLink to='/' className={({ isActive }) => isActive
                        && "active"}
                  > Home</NavLink>  </li>
            <li> <ActiveLink to='/statistic'> Statistics</ActiveLink>  </li>
            <li> <ActiveLink to='/jobs'> Applied Jobs</ActiveLink>  </li>
            <li> <ActiveLink to='/blog'>Blog </ActiveLink>  </li>
          </ul>

        </div>
        <Link to='/' >
            <span className="btn btn-ghost normal-case text-xl">BuildCareer</span>
        </Link>
    </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        
    <li> <NavLink to='/' className={({ isActive }) => isActive
                        && "active"}
                  > Home</NavLink>  </li>
        <li> <ActiveLink to='/statistic'> Statistics</ActiveLink>  </li>
        <li> <ActiveLink to='/jobs'> Applied Jobs</ActiveLink>  </li>
        <li> <ActiveLink to='/blog'>Blog </ActiveLink>  </li>
       
    </ul>
  </div>
  <div className="navbar-end  navar_btn">
    <Button>Start Applying</Button>
  </div>
</div>
    );
};

export default Header;