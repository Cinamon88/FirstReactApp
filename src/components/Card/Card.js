import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);

    const dispatch = useDispatch();

    const toggleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(favoriteValue);
        dispatch(toggleCardFavorite(cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <button onClick={toggleFavorite} 
                className={clsx(styles.button, props.isFavorite &&
                styles.isActive)}>
                <i className={"fa fa-star-o"} />
            </button>
        </li>
    );
};

export default Card;