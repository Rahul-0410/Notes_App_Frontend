import React from 'react'

import styles from './login.module.scss'
import Left from './section/left'
import Form from './section/form'

function Login() {
  return (
    <main className={styles.container}>
        <Left/>
        <Form/>
    </main>
  )
}

export default Login
