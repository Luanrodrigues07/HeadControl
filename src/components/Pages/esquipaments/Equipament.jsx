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
