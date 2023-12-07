import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
    headingTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, headingTitle }) => {
    return (
        <body className='min-h-screen'>
            <Header />
            <main className="flex flex-col items-center justify-between p-8">
                <h2>{headingTitle}</h2>
                {children}
            </main>
            <Footer />
        </body>
    );
};

export default Layout;