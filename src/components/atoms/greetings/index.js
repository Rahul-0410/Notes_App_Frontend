// import React, { useState } from 'react'
// import styles from './greeting.module.scss'
// import { getUsername } from '../../../apis/user-Api'
// // console.log(username);
// function Greetings() {
//   const [name, setName] = useState('');
//   // setName(getUsername());
//   return (
//     <section className={styles.container}>
//         <h2>Hello, <span>RGS! 👋🏼</span></h2>
//         {/* <h2>Hello, <span>{name} 👋🏼</span></h2> */}
//         <p>All your notes are here, in one place!</p>
//     </section>
//   )
// }

// export default Greetings

import React, { useState, useEffect } from 'react';
import styles from './greeting.module.scss';
import { getUsername } from '../../../apis/user-Api';

function Greetings() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(getUsername());
  }, []);

  return (
    <section className={styles.container}>
        <h2>Hello, <span>{name || "Achiever"}  👋🏼</span></h2>
        {/* <h2>Hello, <span>Rahul 👋🏼</span></h2> */}
        <p>All your notes are here, in one place!</p>
    </section>
  );
}

export default Greetings;

