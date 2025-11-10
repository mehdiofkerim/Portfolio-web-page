import "./Footer.css"
import "../SocialMedia/SocialMedia.css"
import SocialIcons from "../SocialMedia/SocialMedia"
import { socialDatas } from "../SocialMedia/contant"

const Footer = ({name, message, copyright}) => {
    return (
        <footer className="footer-section">
            <h2>{name}</h2>
            <p className="footer-message">{message}</p>
            <SocialIcons {...socialDatas}/>
            <p className="footer-copy">{copyright}</p>
        </footer>
    )
}

export default Footer