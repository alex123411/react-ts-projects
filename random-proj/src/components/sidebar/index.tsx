import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

//style
import sidebarScss from './_sidebar.module.scss'

interface ILink {
    to: string,
    name: string
}

const SideBar = () => {

    const currentPath: string = useLocation().pathname
    
    const paths = [
        { to: "/", name: "Wheel" },
        { to: "/coinflip", name: "Coin flip" },
        { to: "/randpassword", name: "Random password" },
        { to: "/randnumber", name: "Random number" }
    ] as ILink[]
 
    const logoImgURL = 'https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp'
    const avatarImgURL = 'https://avatars.githubusercontent.com/u/57320718?s=40&v=4'
    return (
        <div className={sidebarScss.sidebar + ' sidebar d-flex flex-column'}>
            <div className={sidebarScss.logo}>
                <img className={sidebarScss.logoImage} src={logoImgURL} alt="Papich Logo" />
                <span className="fs-4">Get your random</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {paths.map((item) => 
                    <li key={item.name}>
                        <Link to={item.to} className={`nav-link ${currentPath == item.to ? "active" : "text-white"}`}>{item.name}</Link>
                        {/* <a href="#" className="nav-link active" aria-current="page">Wheel</a> */}
                    </li>
                )}
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle show" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
                    <img src={avatarImgURL} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>gusb</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1" data-popper-placement="top-start" style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(0px, -34px)" }}>
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )

}

export default SideBar