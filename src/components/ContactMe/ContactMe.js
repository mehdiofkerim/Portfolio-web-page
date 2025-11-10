import "./ContactMe.css"

const ContactMe = ({title, buttonText}) => {
    return (
        <section className="contact-section" id="contactus">
            <h2 className="contact-title">{title}</h2>
            <button className="contact-btn">{buttonText}</button>
        </section>
    )
}

export default ContactMe