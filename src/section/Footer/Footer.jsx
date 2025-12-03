import "./Footer.css"
import logo from "../../assets/Logo25.png"
import gmail from "../../assets/gmail.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"

export default function Footer(){
    return(
        <footer>
            <div className="footer-nav">
                <li>Home</li>
                <li>Profil</li>
                <li>Presentation</li>
                <li>Project</li>
            </div>

            <div className="footer-info">
                <img src={logo} alt="logo" id="logo-footer" />
                <div className="footer-contact">
                    <div className="contact gmail" >
                        <img src={gmail} alt="gmail" />
                    </div>
                    <div className="contact github" >
                        <img src={github} alt="github" />
                    </div>
                    <div className="contact instagram" >
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
                <p>©MinoProductions 2026 </p>
            </div>
            
        </footer>
    )
}