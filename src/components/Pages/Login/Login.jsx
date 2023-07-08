import styles from '../Login/Login.module.css'
import libertalogo from '../../images/libertalogo.png'
import Header from '../../Header/Header'
import { useNavigate } from 'react-router-dom'
import { React } from 'react'
// import { emailValidation, passwordValidation } from '../../utils/validador'
// import userService from '../../services/userService'

// const userServices = new userService()

function Login() {
  //   const [loading, setLoading] = useState(false)
  //   const [form, setForm] = useState([])

  //   const handleSubmit = async (event) => {
  //     event.preventDefault()
  //     try {
  //       setLoading(true)
  //       const response = await userServices.login(form)
  //       if (response === true) {
  //         console.log('User Logged')
  //       }
  //       setLoading(false)
  //     } catch (err) {
  //       alert('erro')
  //     }
  //   }

  //   const handleChange = (event) => {
  //     setForm({ ...form, [event.target.name]: event.target.value })
  //   }

  //   const inputValidation = () => {
  //     return emailValidation(form.email) && passwordValidation(form.password)
  //   }

  const navigate = useNavigate()
  const handleChange = () => {
    navigate('/home')
  }

  return (
    <div>
      <Header />
      <div className={styles.login}>
        <footer>
          <img src={libertalogo} />
          <strong>bem-vindo(a) ao Head Control!</strong>
          <div className={styles.pageon}>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email@liberta.com.vc"
            />
          </div>
          <div className={styles.pageon}>
            <label>Senha</label>
            <input name="password" type="password" />
          </div>
          <button
            type="submit"
            onClick={handleChange}
            // disabled={loading === true || !inputValidation()}
          >
            Login
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Login
