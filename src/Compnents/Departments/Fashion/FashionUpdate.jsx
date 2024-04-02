import React from 'react'
import styles from './FashionUpdate.module.css';
import img from './imgs/pd.png';

export default function FashionGallery() {
  return (
    <div class="col-lg-10">
            <div class="container">
                <div class="Updates">
                    <div class="row">
                      <div className={styles.title}>
                        <h2>Updates</h2>
                      </div>
                      <div class="col-lg-6">
                        <div class={`${styles.card} card mb-3`} >
                          <div class="row g-0">
                            <div class={`${styles.imgCard} col-md-4`}>
                              <div className={styles.overlay}>
                                <div className={styles.iconHolder}>
                                 <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                                </div>
                              </div>
                              <img src={img} alt="..." />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class={`${styles.cardTitle} card-title`}>Research Name </h5>
                                <p class={`${styles.cardText} card-text`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class={`${styles.card} card mb-3`} >
                          <div class="row g-0">
                            <div class={`${styles.imgCard} col-md-4`}>
                              <div className={styles.overlay}>
                                <div className={styles.iconHolder}>
                                 <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                                </div>
                              </div>
                              <img src={img} alt="..." />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class={`${styles.cardTitle} card-title`}>Research Name </h5>
                                <p class={`${styles.cardText} card-text`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class={`${styles.card} card mb-3`} >
                          <div class="row g-0">
                            <div class={`${styles.imgCard} col-md-4`}>
                              <div className={styles.overlay}>
                                <div className={styles.iconHolder}>
                                 <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                                </div>
                              </div>
                              <img src={img} alt="..." />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class={`${styles.cardTitle} card-title`}>Research Name </h5>
                                <p class={`${styles.cardText} card-text`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class={`${styles.card} card mb-3`} >
                          <div class="row g-0">
                            <div class={`${styles.imgCard} col-md-4`}>
                              <div className={styles.overlay}>
                                <div className={styles.iconHolder}>
                                 <i class={`${styles.icon} fa-solid fa-arrow-up-right-from-square`}></i>
                                </div>
                              </div>
                              <img src={img} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class={`${styles.cardTitle} card-title`}>Research Name </h5>
                                <p class={`${styles.cardText} card-text`}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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
