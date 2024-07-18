import React from 'react'
import styles from './button.module.scss'
import { Icon } from "@iconify/react"
import { useNavigate } from 'react-router-dom';
function Button(props) {
  
  const {text, icon, handleClick,isDisabled}= props;
  return (
    // <article>
    //   <button> <Icon className={styles.icons} icon={"bi:google"} />Join with Google</button>
    // </article>
    <article>
      <button className={`${styles.button}  `}
     onClick={handleClick} disabled={isDisabled}>
      <Icon className={styles.icons} icon={icon}/>
  <h4> {text} </h4>  
      </button>
    </article>
    
  )
}

export default Button
