import React from "react"
import "./SocialMedia.css"
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa"

const iconMap = {
    whatsapp: <FaWhatsapp />,
    instagram: <FaInstagram />,
    telegram: <FaTelegram />
}

const SocialIcons = ({ socialLinks = [] }) => {
    return (
        <div className="social-icon">
            {socialLinks.map((link, index) => (
                <a href={link.url} key={index} target="_blank" rel="noopener noreferrer">
                    <div className="icon-circle">{iconMap[link.icon]}</div>
                </a>
            ))}
        </div>
    )
}

export default SocialIcons