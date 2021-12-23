import React from 'react'
import DashboardHeader from './Header/DashboardHeader'
import Footer from './Footer/Footer'

const DashboardLayout = ({ children }) => (
    <>
        <DashboardHeader />
        {children}
        <Footer />
    </>
)

export default DashboardLayout