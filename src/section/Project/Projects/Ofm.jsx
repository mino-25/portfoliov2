import "../Project.css";

import Logo from "../../../assets/mahi-logo.png";
import Page from "../../../assets/ofm-home.png";

export default function Ofm(){
    return(
        <div className="project italia">
            <div className="project-media">
                <img src={Logo} alt="Little Italia Logo" className="project-logo"/>
                <img src={Page} alt="Little Italia Website" className="project-page" /> 
            </div>
            <div className="project-info">
                <h2>Obsèques France Mediterrannée</h2>
                <p>
                    Site d'un service funéraire en France. Conçu avec React et hébergé sur O2switch.
                </p>
                <a href="https://obsequesfrancemediterranee.fr/" target="_blank" rel="noopener noreferrer">Visiter le site</a>
            </div>
        </div>
    )
}