import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { BrowserRouter, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <BrowserRouter>
                    <div className={styles.links}>
                        <Link to="/"><i className={styles.icon + " fa fa-tasks"} aria-hidden="true"></i></Link>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/favorite"><li>Favorite</li></Link>
                            <Link to="/about"><li>About</li></Link>
                        </ul>
                    </div>
                </BrowserRouter>
            </Container>
        </nav>
    )
}

export default NavBar;