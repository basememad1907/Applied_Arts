import React from 'react'
import styles from './InteriorDesign.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function InteriorDesign() {
  return (
<>
      <section className={styles.IntDesignHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Interior Design</h2>
              <span>
                <Link to="/InteriorDesign/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutIntDesign}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="intDesignSubjects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="intDesignScheduals" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="intDesignGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="intDesignUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
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
