import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import  { BiBuildingHouse } from "react-icons/bi";
import {RiFileList3Line} from "react-icons/ri";
import {GrDropbox} from "react-icons/gr";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '../Dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Kategoritë',
    path: '/kategorite',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Furnizuesit',
    path: '/messages',
    icon: <BiBuildingHouse/>,
    cName: 'nav-text'
  },
  {
    title: 'Produktet',
    path: '/products',
    icon: <GrDropbox/>,
    cName: 'nav-text'
  },
  {
    title: 'Shitjet',
    path: '/customers',
    icon: <RiFileList3Line/>,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];