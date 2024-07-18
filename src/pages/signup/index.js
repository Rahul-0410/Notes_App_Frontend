import React from 'react'

import styles from './signup.module.scss'
import Left from './section/left'
import Form from './section/form'

function SignUp() {
  return (
    <main className={styles.container}>
        <Left/>
        <Form/>
    </main>
  )
}

export default SignUp;
