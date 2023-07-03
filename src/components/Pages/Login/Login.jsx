import styles from '../Login/Login.module.css'
import libertalogo from '../../images/libertalogo.png'
import Header from '../../Header/Header';



const handleClick = () => {
    console.log("Click")
}

function Login() {
    return(
        <div>
            <Header/>
        <div className={styles.login}>
            <footer>
                <img src={libertalogo}/>
                <strong>bem-vindo(a) ao Head Control!</strong>
                <div className={styles.pageon}>
                <label>
                    Email
                    </label>
                <input type='text' placeholder='Email@liberta.com.vc'/>
            </div>

                <div className={styles.pageon}>
                <label>Senha</label>
                <input type='password'/>
            </div>
                <button onClick={handleClick} href="#" >Login</button>
            </footer>
        </div>
        </div>
    )
}



export default Login;