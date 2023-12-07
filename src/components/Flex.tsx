import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function FlexLayout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col lg:flex-row gap-8'>
            {children}
        </div>
    )
}