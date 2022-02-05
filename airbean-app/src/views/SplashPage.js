import './SplashPage.css';
import { Link } from "react-router-dom";

import landingGraphic from '../assets/graphics/airbean-landing.svg';
import introGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import introGraphicRight from '../assets/graphics/intro-graphic-right.svg';

function SplashPage() {
    return (
        <section>
            <Link to="/menu">
                <img className="intro-graphic-left" src={introGraphicLeft} alt="intro graphic left"/>
                    <div className="landing__container">
                        <img className="landing__container__graphic" src={landingGraphic} alt="landing graphic"/>
                    </div>
                <img className="intro-graphic-right" src={introGraphicRight} alt="intro graphic right"/>
            </Link>
        </section>
    )
}

export default SplashPage;