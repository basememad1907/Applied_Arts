import React from 'react'
import styles from './PDGallery.module.css';
import product2 from '../imgs/product22.jpg';
import { Link } from 'react-router-dom';

export default function PDGallery() {
  return (
    <>
    <div className="col-lg-10">
      <section className={styles.gallary}> 
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">      
          <div className="col-lg-3">
                <div className={styles.card}>
                  <div className={styles.overlay}>
                    <div className={styles.holder}>
                      <div className={styles.textCard}>
                        <h3>Project Name: Project 2</h3>
                        <p>
                          Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                        </p>
                        <h5>Department Name: Product Design</h5>
                        <h6 className="py-2">Code: 202112224</h6>
                      </div>
                    </div>
                  </div>
                  <img src={product2} alt="Project 2" />
                <div/> 
            </div>
          </div>
          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  
          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  

          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  

          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  

          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  

          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
            </div>
          </div>  

          
          <div className="col-lg-3">
              <div className={styles.card}>
                <div className={styles.overlay}>
                  <div className={styles.holder}>
                    <div className={styles.textCard}>
                      <h3>Project Name: Project 2</h3>
                      <p>
                        Description : <span> Lorem ipsum dolor sit amet, consectetur adipisicing</span>.
                      </p>
                      <h5>Department Name: Product Design</h5>
                      <h6 className="py-2">Code: 202112224</h6>
                    </div>
                  </div>
                </div>
                <img src={product2} alt="Project 2" />
              <div/> 
          </div>
        </div>  
        </div>
        <div className="row">
          <div className={styles.btns}>
            <Link to="#" className={styles.btn}>See more</Link>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}
