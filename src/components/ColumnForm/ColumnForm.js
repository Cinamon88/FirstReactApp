import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
// import { useParams } from 'react-router';

const ColumnForm = ({listId}) => {
    
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    // const { listId } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId })); // add listId??
        setTitle('');
        setIcon('');
    }

	return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label> <input type="text" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} />
            <label>Icon:</label> <input type="text" className={styles.input} value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;