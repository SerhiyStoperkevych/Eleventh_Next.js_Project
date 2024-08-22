'use client';

import { useState, useEffect } from "react";
import { Notification } from "@/types/realtime";
import axios from "axios";

const NotificationBell = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchNotifications = async () => {
            const { data } = await axios.get('/api/notifications');
            setNotifications(data.notifications);
            setUnreadCount(data.notifications.filter((n: Notification) => !n.read).length);
        };

        fetchNotifications();
    }, []);

    return (
        <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span>notifications</span>
                {unreadCount > 0 && (
                    <span>
                        {unreadCount}
                    </span>
                )}
            </button>
            {dropdownOpen && (
                <div>
                    <ul>
                        {notifications.map(notification => (
                            <li key={notification.id}>
                                <div>{notification.title}</div>
                                <div>{notification.message}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NotificationBell;