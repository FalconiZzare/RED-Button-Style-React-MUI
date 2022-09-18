import React from 'react';
import './NotificationStyle.css'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = () => {
    return (
        <div className={"notif_container"}>
            <div className={"notif"}>
                <NotificationsIcon/>
                100 New Notifications
            </div>
        </div>
    );
};

export default Notification;