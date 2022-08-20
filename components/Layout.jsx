import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <Head>
                    <title>Hello World Ecommerce</title>
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
        </>
    )
}

export default Layout