import styles from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Esercizio di Edoardo Vincenzi</p>
      <div className={styles.footerLink}>
        <Link href="https://edoardovincenzi.netlify.app/">
          <div className={styles.divLink}>
            <WebAssetIcon />
            <p>Sito web</p>
          </div>
        </Link>
        <Link href="https://github.com/edoardovincenzi">
          <div className={styles.divLink}>
            <GitHubIcon />
            <p>GitHub</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
