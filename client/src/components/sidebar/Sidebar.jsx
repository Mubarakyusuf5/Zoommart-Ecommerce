import { faArchive, faBars, faHouse, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = ({isOpen}) => {
  const [submenu, setSubmenu] = useState(false)
  const menus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: faHouse },
    { name: "Product", url:false, icon: faShoppingBasket, submenu: true, submenuItems: [
      {name: "View Product", link: "/admin/view-Product"},
      {name: "Add Product", link: "/admin/add-Product"},
      {name: "Update Product", link: "/admin/update-Product"},
    ] },
    { name: "Category", url:false, icon: faArchive, submenu: true, submenuItems: [
      {name: "View Product", link: "/admin/view-Product"},
      {name: "Add Product", link: "/admin/add-Product"},
      {name: "Update Product", link: "/admin/update-Product"},
    ]},
  ];
  return (
    <div className= {`h-screen bg-slate-600 p-4   ${isOpen ? "w-64" : "w-20"} duration-300 relative `} >
      <div className={`text-3xl text-center font-extrabold text-white pointer-events-none ${isOpen ? "0pacity-1" : "opacity-0"} `}>
              Zoommart
      </div>
      <ul className='pt-7'>
        {
          menus.map((menu, i) => (
            <>
            <li key={i}>
              <NavLink to={menu.link} className={` text-gray-300 flex items-center gap-x-4  cursor-pointer p-2 rounded-md mt-2 hover:bg-lime-50 `}><FontAwesomeIcon icon={menu.icon} className={`text-xl block float-left ${!isOpen ? "scale-110" : ""}`} /><span className={`text-base  flex-1 whitespace-pre duration-500 ${!isOpen && "opacity-0 translate-x-28 overflow-hidden"} delay-100`}>{menu.name}</span></NavLink>
            </li>
            
            {/* {
              menu.submenu && (
                <ul>
                  {menu.submenuItems.map((submenuItem, i) => (
                    <li><NavLink to={"/"} className={`text-gray-300 text-sm flex items-center gap-x-4 p-2 px-5 hover:bg-gray-50 rounded-md`}>{submenuItem.name}</NavLink></li>
                  )
                )}
                </ul>
              )
            } */}
            </>
          ))
        }
      </ul>
    </div>
  )
}
