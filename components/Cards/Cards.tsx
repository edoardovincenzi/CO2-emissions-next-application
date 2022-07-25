import Link from 'next/link';
import LinkMUI from '@mui/material/Link';
import styles from './Cards.module.css';
import { Paper } from '@mui/material';

const Cards = ({ item }: { item: [string, string][] }) => {
  return (
    <Link href={`grafico-generico/${item[0]}`} passHref>
      <LinkMUI
        underline="none"
        sx={{ width: '100%' }}
        className={`flex_column_center ${styles.cardPaper}`}
      >
        <Paper
          elevation={3}
          className={`flex_column_center ${styles.cardPaper}`}
        >
          {`[${item[0]}] ${item[1]}`}
        </Paper>
      </LinkMUI>
    </Link>
  );
};

export default Cards;
