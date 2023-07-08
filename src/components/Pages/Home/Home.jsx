import styles from '../Home/Home.module.css'
import Header from '../../Header/Header'
import Container from '../../Container/Cointainer'

function home() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.hw}>
        <Container />
        <div className={styles.ve}></div>
      </div>
    </div>
  )
}

export default home
