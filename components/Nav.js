import {useState} from 'react';
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = useState(false)
  
  const handleClick = () => {
    setOpen(!open)
  }
    return (
        <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/" >
            <a className="navbar-item is-size-3 has-text-black family-secondary">
              <span className="icon is-large">
                <img src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_50/v1598529986/ghyf/KOSHA_-GHYF.png" alt="logo" />
              </span>
              GHYF.
            </a>
          </Link>
      
          <a onClick={handleClick} role="button" className={`navbar-burger burger ${open && "is-active"} `} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
      
        <div id="navbarBasicExample" className={`navbar-menu ${open && "is-active"} `}>

      
          <div onClick={()=>setOpen(false)} className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Scope</a>
              <div className="navbar-dropdown is-boxed">
                <Link href="/scope/cbcr">
                  <a className="navbar-item">
                    Heath Education Internship
                  </a>
                </Link>
                <Link href="/scope/dgh">
                  <a className="navbar-item">
                    Decolonizing Global Health
                  </a>
                </Link>
                <Link href="/scope/youth-action">
                  <a className="navbar-item">
                    Youth action
                  </a>
                </Link>
              </div>
              </div>
            <div className="navbar-item">
              <Link href="/team">
                <a>
                  Team
                </a>
              </Link>
            </div>
            <div className="navbar-item">
              <Link href="/join">
               <a className="button is-primary">Join Us</a>
              </Link>
            </div>
          </div>


        </div>
      </nav>
    )
}

export default Nav;