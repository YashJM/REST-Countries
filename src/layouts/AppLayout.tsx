import React from 'react';

import Navbar from '../components/Navbar';

type AppLayoutProps = {
    children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className='App'>
            <Navbar />
            {children}
        </div>
    );
}

export default AppLayout;
