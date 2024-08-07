import React, { useEffect } from 'react';
import './Notification.css';

export default function Notification({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 1000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification">
            {message}
        </div>
    );
};

