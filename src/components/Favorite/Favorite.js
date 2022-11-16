import styles from './Favorite.module.scss';

const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <h1 className={styles.title}>FAVORITE</h1>
            <p className={styles.subtitle}>Lorem Ipsum.</p>
        </div>
    )
}

export default Favorite;