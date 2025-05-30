import { Link } from 'react-router-dom'
import logo from './logo.png';
import HeaderLink from './HeaderLink';
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Cinetag logo"></img>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./favorites">
                    Favorites
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;