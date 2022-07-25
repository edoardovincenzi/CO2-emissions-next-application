import { Paper } from '@mui/material';
import styles from './Choice.module.css';

const Choice: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Paper elevation={3} className={`flex_row_center ${styles.paperChoice}`}>
      {text}
    </Paper>
  );
};

export default Choice;
