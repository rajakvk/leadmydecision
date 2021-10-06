import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Header.module.css';

const Header = ({ pageTitle }) => {
  return (
    <>
    <title>{pageTitle}</title>
    <header>
      <div className={styles.logo}><Link to="/">AXES</Link></div>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
};

export default Header;