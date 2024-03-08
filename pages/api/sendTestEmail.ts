// pages/api/sendTestEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import sendTestEmail from '../../src/lib/emailservice';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, message, emailType } = req.body;

        // Determine the subject based on emailType or set a default
        const subject = emailType === 'eventNotification' ? 'Event Notification' :
                        emailType === 'eventReminder' ? 'Event Reminder' :
                        'General Information';

        try {
            await sendTestEmail({ recipientEmail: email, subject, message });
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
