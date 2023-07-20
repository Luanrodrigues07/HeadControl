import styles from '../Home/Home.module.css'
import Header from '../../Header/Header'

import {
  UserCirclePlus,
  Cpu,
  AppWindow,
  Browsers,
  EnvelopeSimple,
} from 'phosphor-react'

function home() {
  return (
    <div className={styles.Header}>
      <Header />
      <div className={styles.body}>
        <div className={styles.user}>
          <div className={styles.icon}>
            <img src="https://avatars.githubusercontent.com/u/67129573?v=4" />
            <strong>Luan Rodrigues</strong>
            <p>Analista de Suporte</p>
            <div className={styles.trc}></div>
            <div className={styles.status}>
              <a>
                <p className={styles.boll}>•</p> Temos 12 Usuários Cadastrados
              </a>
              <a>
                <p className={styles.boll}>•</p> Temos 8 Equipamentos
                Cadastrados
              </a>
              <a>
                <p className={styles.boll}>•</p> Temos 9 Softwares Cadastrados
              </a>
              <a>
                <p className={styles.boll}>•</p> Temos 8 Plataformas Cadastrados
              </a>
            </div>
            <div className={styles.trc}></div>
            <div className={styles.buttons}>
              <button>Botao</button>
              <button>Botao</button>
              <button>Botao</button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <a>
              <UserCirclePlus size={50} />
            </a>
            <a>Cadastrar Perfil</a>
          </div>
          <div>
            <a>
              <Cpu size={50} />
            </a>
            <a>Cadastrar Equipamento</a>
          </div>
          <div>
            <a>
              <AppWindow size={50} />
            </a>
            <a>Cadastrar Software</a>
          </div>
          <div>
            <a>
              <Browsers size={50} />
            </a>
            <a>Cadastrar Plataformas</a>
          </div>
          <div>
            <a>
              <EnvelopeSimple size={50} />
            </a>
            <a>Cadastrar Formulario</a>
          </div>
          <div>
            <a>
              <EnvelopeSimple size={50} />
            </a>
            <a>Cadastrar Formulario</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
