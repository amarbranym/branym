import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import ContactFooter from '../../footer/ContactFooter'

const ContactRootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContactFooter />
    </>
  )
}

export default ContactRootLayout
