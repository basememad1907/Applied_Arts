import React from 'react'
import styles from './Cinema.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function Cinema() {
  return (
<>
      <section className={styles.CinemaHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Cinema & Photography</h2>
              <span>
                <Link to="/Cinema/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutCinemaHome}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="cinemaSubjects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="cinemaScheduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="cinemaGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="cinemaUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
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
