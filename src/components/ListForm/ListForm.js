import styles from './ListForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description,})); 
        setTitle('');
        setDescription('');
    }

	return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label> <input type="text" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} />
            <label>Description:</label> <input type="text" className={styles.input} value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;