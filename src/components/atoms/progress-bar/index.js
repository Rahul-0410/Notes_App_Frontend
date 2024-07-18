import React from 'react'
import styles from "./bar.module.scss"

function ProgressBar(props) {
  const {percentage} = props;
  return (
    <div className={styles.container}>

      <span style={{width: percentage || "50%"}} ></span>
      
    </div>
  )
}

export default ProgressBar
