import React from 'react'
import styles from './CinemaScheduales.module.css';

export default function CinemaScheduales() {
  return (
    <div className="col-lg-10">
            <div className="container">     
                <div className={styles.schedules}>
                     <div className="container">
                        <h2>Schedules</h2>

                        <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.Scard}>
                                <div className="row">
                                    <div className={`${styles.col3} col-lg-3`}>
                                        <i className="fa-regular fa-file-pdf"style={{ color: '#145a94' }}></i>
                                    </div>
                                    <div className={`${styles.col9} col-lg-9`}>
                                        <h4>Level 1</h4>
                                        <p>ClICK HERE</p>
                                    </div>
                                </div>
                              </div>  
                          </div>

                          <div className="col-lg-6">
                            <div className={styles.Scard}>
                                <div className="row">
                                    <div className={`${styles.col3} col-lg-3`}>
                                        <i className="fa-regular fa-file-pdf"style={{ color: '#145a94' }}></i>
                                    </div>
                                    <div className={`${styles.col9} col-lg-9`}>
                                        <h4>Level 2</h4>
                                        <p>ClICK HERE</p>
                                    </div>
                                </div>
                              </div>  
                          </div>
                          
                          <div className="col-lg-6">
                            <div className={styles.Scard}>
                                <div className="row">
                                    <div className={`${styles.col3} col-lg-3`}>
                                        <i className="fa-regular fa-file-pdf"style={{ color: '#145a94' }}></i>
                                    </div>
                                    <div className={`${styles.col9} col-lg-9`}>
                                        <h4>Level 3</h4>
                                        <p>ClICK HERE</p>
                                    </div>
                                </div>
                              </div>  
                          </div>

                          <div className="col-lg-6">
                            <div className={styles.Scard}>
                                <div className="row">
                                    <div className={`${styles.col3} col-lg-3`}>
                                    <i className="fa-regular fa-file-pdf"style={{ color: '#145a94' }}></i>
                                    </div>
                                    <div className={`${styles.col9} col-lg-9`}>
                                        <h4>Level 4</h4>
                                        <p>ClICK HERE</p>
                                    </div>
                                </div>
                              </div>  
                          </div>

                          <div className="col-lg-6">
                            <div className={styles.Scard}>
                                <div className="row">
                                    <div className={`${styles.col3} col-lg-3`}>
                                    <i className="fa-regular fa-file-pdf"style={{ color: '#145a94' }}></i>
                                    </div>
                                    <div className={`${styles.col9} col-lg-9`}>
                                        <h4>Level 5</h4>
                                        <p>ClICK HERE</p>
                                    </div>
                                </div>
                              </div>  
                          </div>

                        </div>
                     </div>
                </div>
            </div>
         </div>
  )
}
