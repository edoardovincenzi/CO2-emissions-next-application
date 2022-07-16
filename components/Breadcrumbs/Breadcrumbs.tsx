import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkMUI from '@mui/material/Link';
import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

export interface ICrumbs {
  name: string;
  href: string;
}

export default function BasicBreadcrumbs({ crumbs }: { crumbs: ICrumbs[] }) {
  return (
    <div role="presentation" style={{ padding: '15px', height: '10vh' }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="-"
        className={styles.navBreadcrumbs}
      >
        {crumbs.map((item: ICrumbs, index: number) => {
          return (
            <Link key={index} href={item.href} passHref>
              <LinkMUI key={index} underline="hover" color="inherit">
                {item.name}
              </LinkMUI>
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
