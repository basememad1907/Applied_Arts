import React from 'react'
import styles from './Fashion.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Fashion() {
  return (
<>
      <section className={styles.FashionHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Fashion</h2>
              <span>
                <Link to="/Fashion/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutFashion}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="fashionSubject" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="fashionScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="fashionGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="fashionUpdate" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <a href='#' className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Feedback</a>
              </div>
            </div>
              <Outlet></Outlet>
          </div>
        </div>
      </section>  
    </>  
)
}
