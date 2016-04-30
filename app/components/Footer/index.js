import React from 'react'

import A from 'components/A'
import styles from './styles.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>
          This project is licensed under the Beerware license.
        </p>
      </section>
      <section>
        <p>
          Made with love by <A href="https://github.com/luciernagale">Alesita</A> && <A href="https://github.com/rogr">Rogelio</A>.
        </p>
      </section>
    </footer>
  )
}

export default Footer