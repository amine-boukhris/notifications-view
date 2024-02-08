import React from 'react';
import './Header.css';

interface HeaderProps {
    notificationsCount: number;
}

const Header: React.FC<HeaderProps> = ({notificationsCount}) => {
    return (
        <header className='header container'>
            <div className='header__notifications'>
                <span>Notifications</span>
                <span>{(notificationsCount > 99) ? "+99" : notificationsCount}</span>
            </div>
            <button className='header__mark-read'>Mark all as read</button>
        </header>
    );
};

export default Header;
