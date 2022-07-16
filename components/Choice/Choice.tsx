import { Paper } from '@mui/material';
import styles from './Choice.module.css';

const Choice: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Paper elevation={3} className={styles.paper}>
      {text}
    </Paper>
  );
};

export default Choice;
