import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

interface EmailOptions {
    recipientEmail: string;
    subject: string;
    message: string;
}

const sendTestEmail = async ({ recipientEmail, subject, message }: EmailOptions): Promise<void> => {
    const params: AWS.SES.SendEmailRequest = {
        Source: 'kevinhu738@gmail.com', 
        Destination: {
            ToAddresses: [recipientEmail]
        },
        Message: {
            Subject: {
                Data: subject
            },
            Body: {
                Text: {
                    Data: message
                }
            }
        }
    };

    try {
        await ses.sendEmail(params).promise();
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendTestEmail;
