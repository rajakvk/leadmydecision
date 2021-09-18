import * as React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import './Layout.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <Header pageTitle={pageTitle} />
      <main>
        <h1 className="page-heading">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;