import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import styles from './Header.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Container fixed className={styles.container}>
        <Link href="/" passHref>
          <Typography style={{ cursor: 'pointer' }} variant="h4">
            Emissione di CO2
          </Typography>
        </Link>
      </Container>
    </div>
  );
};

export default NavBar;
