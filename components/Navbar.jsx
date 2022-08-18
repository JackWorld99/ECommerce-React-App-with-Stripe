import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    const { theme, setTheme } = useTheme()

    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">Hello World Headphones</Link>
            </p>
            <div className="navbar-icon">
                <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
                {theme === 'light' ? (<button type="button" className="theme-icon" onClick={() => setTheme('dark')}><FiMoon /></button>) : (<button type="button" className="theme-icon" onClick={() => setTheme('light')}><FiSun /></button>)}
                {showCart && <Cart />}
            </div>
        </div>
    )
}

export default Navbar