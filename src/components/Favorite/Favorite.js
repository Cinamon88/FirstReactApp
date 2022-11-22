import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCard);
  if (favoriteCards.length === 0) {
    return (
      <>
        <PageTitle>No favorite cards</PageTitle>
      </>
    );
  }

  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((isFavorite) => (
            <Card
              key={isFavorite.id}
              title={isFavorite.title}
              isFavorite={isFavorite.isFavorite}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Favorite;