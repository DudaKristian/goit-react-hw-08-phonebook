import styles from "./registration.module.css"
import image from "images/reg.png"
import { useState } from "react"
import { useAddUserMutation } from "features/phoneBookSlice"


const Registration = () => {

    const [signUp] = useAddUserMutation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const data = {
        name,
        email,
        password,
    }
    
    const handleChange = e => {
        
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break
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

        if (name && email && password) {
            
            signUp(data)

            setName("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div className={styles.reg__background}>
            <img src={image} alt="guy"  className={styles.reg__image}/>
            <div className={styles.reg__wrapper}>
                
                <h2 className={styles.reg__title}>Wellcome aboard!</h2>
                <p className={styles.reg__aditional}>Create account to start using inTouch</p>
                <form  onClick={handleSubmit}>
                    <label htmlFor="">
                        <input 
                            className={styles.reg__input} 
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={handleChange}
                        />
                        <input 
                            className={styles.reg__input} 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                        <input 
                            className={styles.reg__input} 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                        <button 
                            className={styles.reg__button} 
                            type="submit"
                        >Sign up</button>
                    </label>
                </form>
                
            </div>
        </div>
    )
}

export default Registration