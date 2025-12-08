import "../Project.css";

import Logo from "../../../assets/logoLittleitalia.png";
import Page from "../../../assets/LittleItalia.png";

export default function LittleItalia(){
    return(
        <div className="project italia">
            <div className="project-media">
                <img src={Logo} alt="Little Italia Logo" className="project-logo"/>
                <img src={Page} alt="Little Italia Website" className="project-page" /> 
            </div>
            <div className="project-info">
                <h2>Little Italia</h2>
                <p>Website for an Italian restaurant located in San Diego, CA. Built with React and hosted on Netlify.</p>
            </div>
        </div>
    )
}