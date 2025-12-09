import "./Fleche.css";
import Pages from "../../../assets/pages-fleche-argent.png";
import Logo from "../../../assets/LogoFleche.png";

export default function Fleche() {
  return (
    <div className="projet-fleche">
        <img src={Pages} alt="Pages fleches argent" className="fleche-page"/>
        <img src={Logo} alt="Logo fleche" className="fleche-logo"/>
        <h3>
            Un site d'hotel de luxe frontend et backend avec inscription / reservation / page admin.
            Avec React, Node.js, Express et SQL. Site fictif pour un projet étudiant.
        </h3>
    </div>
  )
}