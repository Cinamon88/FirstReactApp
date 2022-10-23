import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
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