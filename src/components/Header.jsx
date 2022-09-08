import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png';
function Header() {
    return(
        <header className='header'>
            <nav className='nav'>
                <Link to="/"><img src={logo} alt="SportSee" className='nav__logo'/></Link>
                <Link to="/" className='nav__link'><span>Accueil</span></Link>
                <Link to="/profil" className='nav__link'><span>Profil</span></Link>
                <Link to="/settings" className='nav__link'><span>Réglage</span></Link>
                <Link to="/community" className='nav__link'><span>Communauté</span></Link>
            </nav>
        </header>
    )
}

export default Header