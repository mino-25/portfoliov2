import './Header.css'
import Logo from "../../assets/Logo25.png"

export default function Header(){
    return(
        <header>
            <p>Project</p>
            <img src={Logo} alt="logo" />
            <p id='header-contact'>Contact</p>
        </header>
    )
}