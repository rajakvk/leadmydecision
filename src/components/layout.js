import * as React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import * as styles from './Layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <Header pageTitle={pageTitle} />
      <main>
        <h1 className={styles.pageHeading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;