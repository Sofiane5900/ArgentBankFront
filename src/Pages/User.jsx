import React from 'react'
import NavbarSignOut from '../components/Navbar/NavbarSignOut'
import Account from '../components/Account/Account';
import Footer from '../components/Footer/Footer';
import Transactions from '../components/Transactions/Transactions';

const User = () => {
  return (
    <div>
        <NavbarSignOut />
        <Account />
        <Transactions />
        <Footer />
    </div>
  )
}

export default User