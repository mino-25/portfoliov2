import "./Presentation.css";
import highking from "../assets/man-highking.jpg";

import react from "../assets/react.png";
import python from "../assets/python.png";
import node from "../assets/node.png";

export default function Presentation(){
    const logos = [
        { id: "react", src: react, color: "#61dbfb" },
        { id: "python", src: python, color:"#ffd13e" },
        { id: "node", src: node, color:"#68a063" }
    ];
    return(
        <section className="presentation">
            <div className="presentation-text">
                <img src={highking} alt="profil picture" />
                <p>
                    Notre mission est de créer des expériences digitales uniques et performantes. <br />
                    Nous accompagnons les entreprises, startups et entrepreneurs dans le développement de solutions web modernes,
                    le design d’interfaces intuitives et la création d’applications sur-mesure. <br />
                    Notre approche repose sur la qualité, l’innovation et l’écoute — 
                    pour que chaque projet devienne un véritable outil de croissance.

                </p>
            </div>
            <div className="presentation-skills">
                {logos.map(logo =>(
                    <div 
                        className="skill" 
                        id={logo.id}
                        style={{ "--color": logo.color }}
                    >
                        <img src={logo.src} alt={logo.id} />
                    </div>
                ))}
            </div>
            
        </section>
    )
}