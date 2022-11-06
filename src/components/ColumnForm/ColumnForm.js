import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: {title, icon}});
        setTitle('');
        setIcon('');
    }

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

	return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label> <input type="text" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} />
            <label>Icon:</label> <input type="text" className={styles.input} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;