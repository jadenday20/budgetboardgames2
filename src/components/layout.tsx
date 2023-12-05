import React, { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <body className='min-h-screen'>
            <Header />
            <main className="flex flex-col items-center justify-between p-24">{children}</main>
            <Footer />
        </body>
    )
}