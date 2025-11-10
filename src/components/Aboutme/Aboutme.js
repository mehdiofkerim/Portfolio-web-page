import "./Aboutme.css"

const AboutMe = ({title, subtitle, description, buttonText, image}) => {
    const [highLightStart, highLightEnd] = subtitle.split('& Desinger');
    return (
        <section className="about-section" id="aboutes">
            <div className="about-container">
                <div className="about-image">
                    <img src={image} alt="Tech Graphic" />
                </div>
                <div className="about-text">
                    <h2>{title}</h2>
                    <h3>
                        {highLightStart}
                        <span className="highlight">& Desinger</span>
                        {highLightEnd}
                    </h3>
                    <p>{description}</p>
                    <button className="about-button">{buttonText}</button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe