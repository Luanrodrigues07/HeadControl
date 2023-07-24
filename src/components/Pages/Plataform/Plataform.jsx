import styles from '../Plataform/Plataform.module.css'
import Header from '../../Header/Header'
import React, { useState } from 'react'

import {
  UserCirclePlus,
  Cpu,
  AppWindow,
  Browsers,
  EnvelopeSimple,
  PlusCircle,
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Plataform() {
  const [data, setData] = useState({
    nome: '',
    usuario: '',
    email: '',
    cargo: '',
  })

  const cargoOptions = [
    'Analista de Suporte N1',
    'Analista de Suporte N2',
    'Analista de Suporte N3',
    'Especialista em Segurança',
    'Analista de Redes',
  ]
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  const handleNomeUsuarioChange = (e) => {
    const { value } = e.target
    setData((prevData) => ({
      ...prevData,
      nome: value,
      usuario: value,
      email: `${value.toLowerCase()}@liberta.com.vc`,
    }))
  }

  const navigate = useNavigate()
  const handleChange = () => {
    navigate('/Plataform')
  }
  const backhandleChange = () => {
    navigate('/Softwares')
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
                Nome:
                <input type="text" name="nome" />
              </label>
              <label>
                Usuário:
                <input
                  type="text"
                  name="usuario"
                  value={data.usuario}
                  onChange={handleNomeUsuarioChange}
                />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={data.email} readOnly />
              </label>
              <label>
                Cargo:
                <select
                  name="cargo"
                  value={data.cargo}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o cargo</option>
                  {cargoOptions.map((cargo) => (
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

export default Plataform
