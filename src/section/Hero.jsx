import "./Hero.css";
import Mac from "../assets/black-mac.jpg";
import Blob from "../assets/modern-blob.png";

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero-text">
                <h1>MINO PRODUCTIONS</h1>
                <h2>By Amine MAHI</h2>
            </div>
            <img src={Blob} alt="Modern blob" className="hero-blob"/>
            <img src={Mac} alt="Black Macbook" className="hero-mac" />
            
        </section>
    )
}