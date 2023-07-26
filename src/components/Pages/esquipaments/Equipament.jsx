import styles from '../esquipaments/Equipament.module.css'
import Header from '../../Header/Header'
import {
  UserCirclePlus,
  Cpu,
  AppWindow,
  Browsers,
  EnvelopeSimple,
  PlusCircle,
} from 'phosphor-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function equipament() {
  const [data, setData] = useState({
    nome: '',
    usuario: '',
    email: '',
    cargo: '',
  })

  const notebookOptions = [
    'Notebook i5 Dell',
    'Notebook i5 Acer',
    'Notebook i5 Vaio',
  ]
  const monitorOptions = [
    'Montior 24 Philips',
    'Montior 29 LG',
    'Montior 27 Philips',
  ]
  const teclado = ['Com fio', 'Sem fio 2']
  const mouse = ['Com fio', 'Sem fio 2']
  const headset = ['Logitech', 'JBL']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  const navigate = useNavigate()
  const handleChange = () => {
    navigate('/Softwares')
  }
  const backhandleChange = () => {
    navigate('/Profile')
  }
  const toHome = () => {
    navigate('/home')
  }

  return (
    <div className={styles.Header}>
      <Header />
      <div className={styles.body}>
        <div className={styles.user}>
          <div className={styles.icon}>
            <img src="https://avatars.githubusercontent.com/u/67129573?v=4" />
            <strong>Luan Rodrigues</strong>
            <p>Analista de Suporte</p>
          </div>
          <div className={styles.info}>Olá, Você está na Profile!</div>
          <div className={styles.trc2}></div>
          <div className={styles.homebnt}>
            <button onClick={toHome}>Home</button>
          </div>
          <div className={styles.valores}>
            <strong>Custo do Primeiro Mês</strong>
            <div className={styles.valorPrimeiroMes}>
              <a>R$ 0</a>
            </div>
            <div className={styles.trc}></div>
            <strong>Custo Mensal</strong>
            <div className={styles.valorMes}>
              <a>R$ 0</a>
            </div>
          </div>
        </div>
        <div className={styles.util}>
          <div className={styles.cabec}>
            <a>
              <button>
                <UserCirclePlus size={45} />
              </button>
              <button>
                <Cpu size={45} />
              </button>
              <button>
                <AppWindow size={45} />
              </button>
              <button>
                <Browsers size={45} />
              </button>
              <button>
                <EnvelopeSimple size={45} />
              </button>
              <button>
                <PlusCircle size={45} />
              </button>
            </a>
          </div>
          <div className={styles.row}>
            <form onSubmit={handleSubmit}>
              <div className={styles.hoverForm}>
                <strong>Bem Vindo ao Cadastro de Perfil</strong>
              </div>
              <label>
                Notebook:
                <select type="text" name="nome">
                  <option value="">Selecione o notebook</option>
                  {notebookOptions.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Monitor:
                <select>
                  <option value="">Selecione a Opção</option>
                  {monitorOptions.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                teclado:
                <select>
                  <option value="">Selecione a Opção</option>
                  {teclado.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Mouse:
                <select
                  name="cargo"
                  value={data.cargo}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione a Opção</option>
                  {mouse.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                headset:
                <select
                  name="cargo"
                  value={data.cargo}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione a Opção</option>
                  {headset.map((cargo) => (
                    <option key={cargo} value={cargo}>
                      {cargo}
                    </option>
                  ))}
                </select>
              </label>
              <div className={styles.avan}>
                <button onClick={backhandleChange} type="submit">
                  Voltar
                </button>
                <button onClick={handleChange} type="submit">
                  Avançar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default equipament
