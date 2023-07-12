import styles from '../Home/Home.module.css'
import Header from '../../Header/Header'
import Container from '../../Container/Cointainer'

import {
  UserCirclePlus,
  Cpu,
  AppWindow,
  Browsers,
  EnvelopeSimple,
  YoutubeLogo,
  Flag,
} from 'phosphor-react'

function home() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.hw}>
        <Container />

        <div className={styles.ve}>
          <div className={styles.dnt}>
            <button>
              <UserCirclePlus size={48} /> Usuario
            </button>
            <button>
              <Cpu size={48} /> Equipamentos
            </button>
            <button>
              <AppWindow size={48} /> Softwares
            </button>
            <button>
              <Browsers size={48} /> Sistemas Web
            </button>
            <button>
              <EnvelopeSimple size={48} /> Grupo Emails
            </button>
            <button>
              <YoutubeLogo size={48} /> Social
            </button>
            <button>
              <Flag size={48} /> Concluir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
