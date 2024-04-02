import React from 'react';
import styles from "./Login.module.css";
import Img from "./imgs/collage.jpg";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.boxForm}>
        <div className={styles.left}>
          <img src={Img} alt="" />
        </div>
        <div className={styles.right}>
          <h5>Login</h5>
          <p>Don't have an account? <a href="#">Create Your Account</a> it takes less than a minute</p>
          <div className={styles.inputs}>
            <input type="text" placeholder="user name" />
            <br />
            <input type="password" placeholder="password" />
          </div>
          <br /><br />
          <div className={styles.forgetPassword}>
            <p>forgot password?</p>
          </div>
          <br />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
