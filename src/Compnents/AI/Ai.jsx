import React from 'react'
import styles from './Ai.module.css';
import d2 from './imgs/gallery-7.jpg';

export default function Ai() {
  return (
<>
<section class={styles.imgEnhance}>
        <div class="container">
            <div class={styles.text}>
                <h2>Image Enhancement</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus ipsam quam aperiam id accusamus minima fuga voluptas culpa, 
                    <br />dignissimos in ipsum ea harum neque ipsa soluta adipisci assumenda voluptate?</p>
          
                <div class="row text-center">
                    <div class="col-lg-6 col-md-12">
                        <div class={styles.upload}>
                            <img src={d2} alt="" />
                        </div>
                        <button class={`${styles.btn} btn`}>Upload Here</button>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class={styles.upload}>
                            <img src={d2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</>
    )
}
