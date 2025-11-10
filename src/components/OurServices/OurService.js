import "./OurService.css"

const OurService = ({title, items = []}) => {
    return (
        <section className="services-section" id="services">
            <h2 className="services-title">{title}</h2>
            <div className="services-list">
                {items.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <div className="read-more-btn">
                            <button className="service-button">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurService