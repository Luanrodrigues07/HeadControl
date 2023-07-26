import styles from '../Softwares/Softwares.module.css'
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

function Softwares() {
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
    navigate('/Equipaments')
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
                Software 1:
                <input type="text" name="nome" />
              </label>
              <label>
                Software 2:
                <input
                  type="text"
                  name="usuario"
                  value={data.usuario}
                  onChange={handleNomeUsuarioChange}
                />
              </label>
              <label>
                Software 3:
                <input type="email" name="email" value={data.email} readOnly />
              </label>
              <label>
                Software 4:
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

export default Softwares
