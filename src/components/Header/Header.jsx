import styles from './Header.module.css'

import IgniteLogo from '../images/libertalogo.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo}></img>
      <strong>Liberta Cadastro de Perfil</strong>
    </header>
  )
}

export default Header
