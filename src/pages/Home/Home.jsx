import { NavLink } from "react-router-dom"
import styles from "./home.module.css"
import logo from "../../images/logo_big.png"
import girl from "../../images/reg.png"
import girlWave from "../../images/Phone wave_girl.png"
import boy from "../../images/login.png"
import boyWave from "../../images/Phone wave_boy.png"
import styled from "styled-components";


const StyledLinkLogIn = styled(NavLink)`
    display: flex;
    width: 333px;
    height: 56px;

    align-items: center;
    justify-content:center;

    border: none;
    border-radius: 12px;
        
    font-weight: 500;
    font-size: 22px;
    
    text-decoration: none;
            
    background-color: #DA6A4B;
    color: #FCFDFF;
    
    margin-bottom: 36px;

    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        background-color: #FCFDFF;
        color: #DA6A4B;
    }
    `;

    const StyledLinkReg = styled(NavLink)`
    margin-left: 7px;

    font-weight: 500;
    font-size: 22px;

    color:#FC7D5A;

    text-decoration: none;
    `;

const Home = () => {
    return (
        <div className={styles.home__background}>
            <img src={girl} alt="girl" className={styles.home__image_girl}/>
            <img src={boy} alt="boy" className={styles.home__image_boy}/>
            <img src={girlWave} alt="wave right" className={styles.home__image_girlWave} />
            <img src={boyWave} alt="wave left" className={styles.home__image_boyWave}/>
            <div className={styles.home__info}>
                <img src={logo} alt="logo" className={styles.home__logo}/>
                <p className={styles.home__mainText}>Your BEST personal contacts manager!</p>
                <StyledLinkLogIn to={"/login"}>Log In</StyledLinkLogIn>
                <span className={styles.home__regText}>Are you a new user? Please,</span>
                <StyledLinkReg to={"/registration"}>Register</StyledLinkReg>
            </div>
        </div>
        
    )
}

export default Home