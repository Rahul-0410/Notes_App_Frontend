import React from 'react'
import styles from './loader.module.scss'
import BrandLogo from "../brand"
import ProgressBar from '../../atoms/progress-bar';

function Loader() {
  return (
    <article className={styles.container}>
        <BrandLogo/>
        <ProgressBar/>

    </article>
  )
}

export default Loader;
