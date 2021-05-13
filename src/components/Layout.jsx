import React from 'react'
import Helmet from 'react-helmet'

import Footer from './Footer'
import '../styles/style.css'

export default function Layout({children}) {
    return (
        <>
        <Helmet>
            
        </Helmet>
        <main> {children}</main>
        <Footer />
        </>
    )
}