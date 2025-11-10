import { headerDatas, heroDatas } from './components/Header/Content';
import { aboutmeDatas } from './components/Aboutme/Content';
import { servicesData } from './components/OurServices/Content';
import { contactmeDatas } from './components/ContactMe/Content';
import { footeDatas } from './components/Footer/content';
import Header from './components/Header/MainHeader/Header';
import Navbar from './components/Header/Navbar/Navbar';
import AboutMe from './components/Aboutme/Aboutme'
import OurService from './components/OurServices/OurService';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className='page-wrapper'>
            <Navbar {...headerDatas}/>
            <Header {...heroDatas} />
            <AboutMe {...aboutmeDatas} />
            <OurService {...servicesData} />
            <ContactMe {...contactmeDatas} />
            <Footer {...footeDatas}/>
        </div>
    )
}

export default App