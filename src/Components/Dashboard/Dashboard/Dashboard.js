import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';

const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            {
                user && <UserSidebar></UserSidebar>
            }
        </div>
    );
};

export default Dashboard;