import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';

const Dashboard = () => {
    const [user, setUser]=useContext(UserContext);
    return (
        <div>
            {!user && <h1>Ups, it seems that you're not logged in. Please log in to see your dashboard, orders, reviews</h1>}
            {user && <UserSidebar></UserSidebar>
            
            }
        </div>
    );
};

export default Dashboard;