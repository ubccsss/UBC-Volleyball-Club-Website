"use client"

import React, { useState, ChangeEvent } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailType, setEmailType] = useState('eventNotification'); //default option

    interface EmailTemplates {
        [key: string]: string;
    }

    const emailTemplates: EmailTemplates = {
        eventNotification: "Hi there,\n\nThis is a notification about an upcoming event. Please mark your calendars!",
        eventReminder: "Reminder!\n\nDon't forget about our event happening tomorrow. We hope to see you there!",
        generalInfo: "Hello,\n\nWe wanted to share some important information with you. Please see the details below."
    };

    const handleChangeEmailType = (e: ChangeEvent<HTMLSelectElement>) => {
        const newEmailType = e.target.value;
        setEmailType(newEmailType);
        setMessage(emailTemplates[newEmailType]);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/sendTestEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message, emailType }), // Send email, message, and emailType
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="p-2 border border-gray-300 rounded-md w-full"
            />
            <select
                value={emailType}
                onChange={handleChangeEmailType}
                className="p-2 border border-gray-300 rounded-md w-full"
            >
                <option value="eventNotification">Event Notification</option>
                <option value="eventReminder">Event Reminder</option>
                <option value="generalInfo">General Information</option>
            </select>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
                className="h-32 p-2 border border-gray-300 rounded-md w-full"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full">Send Test Email</button>
        </form>
    );
};

export default EmailForm;