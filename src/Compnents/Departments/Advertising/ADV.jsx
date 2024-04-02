import React from 'react'
import styles from './ADV.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function ADV() {
  return (
    <>
      <section className={styles.AdvHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Advertising</h2>
              <span>
                <Link to="/ADV/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutAdv}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="advSubject" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="advScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="advGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="AdvUpdate" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
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
