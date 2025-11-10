import './Header.css'

const Header = ({firstName, lastName, profession}) => {

    return (
        <section className='hero'>
            <div className='hero-content'>
                <p className='greeting'>Hello, my name is</p>
                <h1 className='name'>
                    <span className='first-name'>{firstName}</span>
                    <span className='last-name'> {lastName}</span>
                </h1>
                <p className='profession'>
                  I'am a {profession}  
                </p>
            </div>
        </section>
    )

}

export default Header