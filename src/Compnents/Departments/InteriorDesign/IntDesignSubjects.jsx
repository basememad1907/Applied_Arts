import React from 'react'
import styles from './IntDesignSubjects.module.css';

export default function IntDesignSubjects() {
  return (
    <div class="col-lg-10">
            <div class="container">
                <div class={styles.tableDp}>
                <div className={styles.title}>
                <h3>Program Levels ( Credit Hours)</h3> 
                </div>
                    <table class={`${styles.table} table`}>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">The System</th>
                            <th scope="col">Credit Hours</th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>University Mandatory</td>
                            <td>8 Hrs</td>
                
                          </tr>

                          <tr>
                            <th scope="row">2</th>
                            <td>University Optional</td>
                            <td>6 Hrs</td>
                         
                          </tr>
                         
                          <tr>
                            <th scope="row">3</th>
                            <td>hiiii</td>
                            <td>22 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">4</th>
                            <td>hiiii</td>
                            <td>4 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">5</th>
                            <td>Faculty Mandatory</td>
                            <td>11 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">6</th>
                            <td>Faculty Optional</td>
                            <td>10 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">7</th>
                            <td>Mandatory major requirements</td>
                            <td>95 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">8</th>
                            <td>Optional major requirements</td>
                            <td>20 Hrs</td>
                          </tr>

                          <tr>
                            <th scope="row">9</th>
                            <td>Total of Credit Hours</td>
                            <td>180 Hrs</td>
                          </tr> 

                        </tbody>
                      </table>
                </div>
            </div>
         </div>
  )

}
