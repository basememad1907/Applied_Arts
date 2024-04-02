import React from 'react';
import logo from "./Imgs/o6u logo.jpg";   
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

export default function Header() {
  return (
    <>
      {/* Header 1 */}
      <header className={styles.header1}>
        <div className="container  ">
            <div className={styles.navbar}>
                    <ul className="d-inline-flex">
                        <li><p>October 6 University</p></li>
                        <li><img src={logo} alt="/" /></li>
                        <li><p>Faculty of Applied Arts</p></li>
                    </ul>

                    <div className={styles.icons}>
                    <Link to="Login"><i className="fa-regular fa-user" style={{ color: '#07385e' }}></i></Link>
                    </div>
            </div>         
        </div>
      </header>


      {/* Header 2 */}
      <header className={styles.header2}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${styles.collapse} navbar-collapse`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink, styles.active} nav-link active`} aria-current="page" to="/">Home</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink, styles.active} nav-link active`} aria-current="page" to="aboutHome">About</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink, styles.active} nav-link active`} aria-current="page" to="gallery">Gallery</Link>
                </li>
                <li className={`${styles.navItem} nav-item dropdown`}>
  <Link className={`${styles.navLink} nav-link dropdown-toggle`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Departments
  </Link>
  <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="navbarDropdown">
    <li><Link className="dropdown-item" to="productDesign">Product design</Link></li>
    <li><Link className="dropdown-item" to="Fashion">Fashion</Link></li>
    <li><Link className="dropdown-item" to="InteriorDesign">Interior design</Link></li>
    <li><Link className="dropdown-item" to="ADV">Advertising</Link></li>
    <li><Link className="dropdown-item" to="Cinema">Cinematography and Photography</Link></li>
  </ul>
</li>

                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink , styles.active} nav-link active`} aria-current="page" to="eventsAndNews">News&Events</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink , styles.active} nav-link active`} aria-current="page" to="educationHome">Education</Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link className={`${styles.navLink , styles.active} nav-link active`} aria-current="page" to="ai">AI</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
