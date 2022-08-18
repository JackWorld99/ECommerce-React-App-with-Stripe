import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <div className="layout">
                <Head>
                    <title>Hello World Store</title>
                </Head>
                <header>
                    <Navbar />
                </header>
                <main className="main-container">
                    {children}
                </main>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout