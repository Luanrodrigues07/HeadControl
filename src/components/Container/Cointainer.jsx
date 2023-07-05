import styles from '../Container/Container.module.css'

function Container() {
    return (
        <aside className={styles.navbar}>
      
      <div className={styles.nav}>
        <strong>Olá, Luan Rodrigues</strong>
        <a>Cadastrar Perfil</a>
        <a>Cadastrar Perfil</a>
        <a>Cadastrar Perfil</a>
      </div>
      <div className={styles.tracet}></div>

    </aside>
    
    )
}

export default Container