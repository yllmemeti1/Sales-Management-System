import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='navbar'>
          
       
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <form class="forma form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Kerko..." aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Kerko</button>
  </form>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Dashboard;