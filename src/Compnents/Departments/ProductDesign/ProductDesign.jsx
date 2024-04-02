import React from 'react';
import styles from './ProductDesign.module.css';
import { Link, Outlet } from 'react-router-dom';


export default function ProductDesign() {
  return (
    <>
      <section className={styles.productDesignHome}>
        <div className={styles.background}>
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h2>Product Design</h2>
              <span>
                <Link to="/productDesign/">Department /</Link> <Link to="/">Home</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutProduct}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className={`${styles.listGroup} list-group`}>
                <Link to="pdSujects" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Subjects</Link>
                <Link to="pdSceduales" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Schedules</Link>
                <Link to="pdGallery" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Gallery</Link>
                <Link to="pdUpdates" className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Updates</Link>
                <a href='#' className={`${styles.listGroupItem} list-group-item list-group-item-action`}>Feedback</a>
              </div>
            </div>
              <Outlet></Outlet>
          </div>
        </div>
      </section>  
    </>
  );
}
