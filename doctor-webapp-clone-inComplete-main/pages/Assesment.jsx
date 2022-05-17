import React from 'react'
import style from '../styles/assesment.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Assesment = () => {

    return (
        <div>
            <div className={style.question_top}>
           <div className="container">
               <div className="row">
               <div className={style.question_posit}>
              <div className={style.question_text}>
                  <div className={style.question_text1}>
                      <h1>Assesments Journey</h1>
                  </div>
                  <div className={style.question_text2}>
                      <ul>
                          <li>
                              <Link href=""><a>Welcome</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Fitness</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>gender</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Trainer</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>classes</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Budget</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Budget</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Budget</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Budget</a></Link>
                          </li>
                          <li>
                              <Link href=""><a>Budget</a></Link>
                          </li>
                          
                      </ul>
                  </div>
              </div> 
              </div>
            </div>
            <div className={style.question_middle}>
           <div className="row">
               <div className="col-md-4">
                <div className={style.image_text1}>
                  <Image
                  src="/images/qestion.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                 />
               </div>
               </div>
               <div className="col-md-8">
                   <div className={style.inner_text1}>
                       <h6>What are you looking for? For what purpose do you intend to take up fitness</h6>
                       <ul>
                           <li>
                       <input type="radio" id="male" name="general" value="fitness" />
                       <label for="male">General Fitness </label>
                       </li>
                       <li>
                       <input type="radio" id="male" name="general" value="fitness" />
                       <label for="male">Weight loss </label>
                       </li>
                       <li>
                       <input type="radio" id="male" name="general" value="fitness" />
                       <label for="male">Improve immunity </label>
                       </li>
                       <li>
                       <input type="radio" id="male" name="general" value="fitness" />
                       <label for="male">Increased energy  </label>
                       </li>
                       <li>
                       <input type="radio" id="male" name="general" value="fitness" />
                       <label for="male">Weight gain </label>
                       </li>
                       </ul>

                       <div className={style.submitform}><button type="submit">Next</button></div>

                   </div>     
               </div>
            </div>
        </div>

           </div>
        </div>
      </div>    
    )
}

export default Assesment
