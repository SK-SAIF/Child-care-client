import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AdminContext, UserContext } from '../../../App';
import Admin from '../../Admin/Admin/Admin';
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