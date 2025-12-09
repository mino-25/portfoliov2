import "./Project.css"
import LittleItalia from "./Projects/LittleItalia";
import Fleche from "./Projects/Fleche";
import Ofm from "./Projects/Ofm";
export default function Project(){
    return(
        <section className="projects">
            <div className="project-website">
                <h2>WEB SITE</h2>
            </div>
            <LittleItalia />
            <Fleche />
            <Ofm />
            <div className="project ecobot">
                Ecobot
            </div>

        </section>
    )
}