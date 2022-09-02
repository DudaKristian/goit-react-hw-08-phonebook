import styles from "./Login.module.css"
import image from "images/login.png"
import { useState } from "react"
import { useLogInUserMutation } from "features/phoneBookAPI.js";

// insert loader into the button and show it while loading, use sighIn hook status isLoading

const Login = () => {

    const [signIn] = useLogInUserMutation();

    const [email, setEmail] = useState("dudauser@gmail.com");
    const [password, setPassword] = useState("dudauser12345")

    const data = {
        email,
        password,
    }

    const handleChange = e => {
        
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break
                case "password":
                setPassword(e.target.value);
                break
            default:
                return;
        }
    }

    const handleSubmit = e => {

        e.preventDefault()

        if (email && password) {
            
            signIn(data)

            setEmail("")
            setPassword("")
        }
    }

    return(
        <div className={styles.login__background}>
            <img src={image} alt="guy" className={styles.login__image} />
            <div className={styles.login__wrapper}>
                <h2 className={styles.login__title}>Wellcome back!</h2>
                <p className={styles.login__aditional}>Please, enter your details</p>
                <form onClick={handleSubmit}>
                    <label htmlFor="">
                        <input
                            className={styles.login__input}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                        <input
                            className={styles.login__input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className={styles.login__button}
                            >Log in</button>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Login