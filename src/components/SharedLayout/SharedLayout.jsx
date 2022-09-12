import { NavLink, Outlet, Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { getUser } from "features/userSlice";
import styles from "./SharedLayout.module.css"
import styled from "styled-components";
import logo from "images/logo.png"
import { useGetLogoutMutation } from "features/phoneBookAPI";


const StyledLinkSignIn = styled(NavLink)`
    display: flex;
    width: 160px;
    height: 56px;

    align-items: center;
    justify-content:center;

    border: 1px solid #FC7D5A;
    border-radius: 12px;
    
    font-weight: 500;
    font-size: 22px;
    font-style: normal;
    color: #FC7D5A;
    text-decoration: none;

    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        background-color: #DA6A4B;
        color: #FCFDFF;
        border: none;
        cursor: pointer;
    }
            
    &.active {
    background-color: #DA6A4B;
    color: #FCFDFF;
    border: none;
    }
    `;

const StyledLinkSignUp = styled(NavLink)` 
    display: flex;
    align-items: center;
    justify-content:center;

    width: 160px;
    height: 56px;
    
    border-radius: 12px;
    font-weight: 500;
    font-size: 22px;
    font-style: normal;

    color: #AAAEBA;
    text-decoration: none;

    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
        background-color: #DA6A4B;
        color: #FCFDFF;
        border: none;
        cursor: pointer;
    }
            
    &.active {
    background-color: #DA6A4B;
    color: #FCFDFF;
    border: none;
    }
    `;

export const SharedLayout = () => {

    const { isLogedIn, name } = useSelector(getUser);
    const [logOut] = useGetLogoutMutation();

    const logOutHandler = e => {
        e.preventDefault()
        logOut();
    }

    return (
        <>
            <header className={styles.header}>
                <Link to="/" >
                    <img src={logo} alt="logo" className={styles.header__logo}/>
                </Link>
                {isLogedIn ?
                    
                        <div className={styles.header__forms}>
                            <StyledLinkSignIn to="/contacts">myContacts</StyledLinkSignIn>
                            <span className={styles.header__userName}>{name}</span>
                            <button className={styles.header__logOut}
                                type="submit"
                                onClick={logOutHandler}
                            >LOG OUT</button>
                        </div>
                    
                        :
                        <div className={styles.header__forms}>
                            <StyledLinkSignIn to="/login" >SIGN IN</StyledLinkSignIn>
                            <StyledLinkSignUp to="/registration" className={styles.header__link_signUp}>SIGN UP</StyledLinkSignUp>
                        </div>
                    
                    }
                
            </header>
        
            <Outlet/>
        </>    
    )
}



