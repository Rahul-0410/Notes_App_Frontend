import React, { useState } from 'react'
import styles from './navbar.module.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

// higher order components important for interview


function Navbar() {
    const [searchText, setSerachText] = useState('');
  return (
    <header className={styles.header}>
        <article className={styles['search-bar']}>
            {/* serach bar  */}
            <Icon icon="material-symbols:search"/>
            <input type="text" placeholder='Search Notes' value={searchText}
             onChange={e=> setSerachText(e.target.value)}

              />

        </article>

        <div className={styles.theme}>
            <Icon icon={'vaadin:sun-down'}/>
        </div>

    </header>
  )
}

export default Navbar
