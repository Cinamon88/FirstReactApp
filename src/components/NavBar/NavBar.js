import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <div className={styles.links}>
                    <Link to="/"><i className={styles.icon + " fa fa-tasks"} aria-hidden="true"></i></Link>
                    <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                    </ul>
                </div>  
            </Container>
        </nav>
    )
}

export default NavBar;