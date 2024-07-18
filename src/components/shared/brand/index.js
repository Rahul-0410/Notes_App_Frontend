import React from 'react'
import brandImg from "../../../assets/brand-light.svg"
import brandDarlImg from "../../../assets/brand-dark.svg"
import styles from "./brand.module.scss"

function BrandLogo(props) {
  const {logoOnly, type="light", className}=props;
  return (
   <article className={`${styles.brand} ${className}`}>
    <img src={type=="light" ? brandImg: brandDarlImg} alt="Brand-Logo"/>
    {!logoOnly?
    ( <h1>Note.<span>me</span></h1>) : null}
   
   </article>
  )
}

export default BrandLogo;
