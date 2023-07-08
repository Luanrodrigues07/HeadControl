import styles from '../Container/Container.module.css'
import { Desktop, User, AppWindow } from 'phosphor-react'

function Container() {
  return (
    <aside className={styles.navbar}>
      <div className={styles.nav}>
        <strong>Olá, Luan Rodrigues</strong>
        <a className={styles.users}>Cadastrar Perfil</a>
        <a>Cadastrar Equipamento</a>
        <a>Cadastrar Software</a>
        <a>Cadastrar Plataformas</a>
      </div>
      <div className={styles.trc}></div>
      <div className={styles.tracet}>
        <strong>Dados Atuais</strong>
      </div>
      <div className={styles.stock}>
        <a>
          {' '}
          <User size={13} /> Temos 12 Perfils Cadastrados
        </a>
        <a>
          {' '}
          <Desktop size={13} /> Temos 9 Equipamentos Cadastrados
        </a>
        <a>
          <AppWindow size={13} /> Temos 7 Softwares Cadastrados
        </a>
      </div>
    </aside>
  )
}

export default Container
