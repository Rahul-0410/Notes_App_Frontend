import React from 'react'
import styles from './wrapper.module.scss'

function Wrapper(BaseCompoennt) {
  return function EnhancedComponent (props){
    return(
        <div className={styles.wrapper}>

            <BaseCompoennt {...props}/>
        </div>
    )
  
  };
}
export default Wrapper;
