import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Container>
                <div className={styles.links}>
                    <i className={styles.icon + " fa fa-tasks"} aria-hidden="true"></i>
                    <ul>
                        <li>Home</li>
                        <li>Favorite</li>
                        <li>About</li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default NavBar;