// app/page.tsx or wherever you're using EmailForm
import React from 'react';
import dynamic from 'next/dynamic';

const EmailForm = dynamic(() => import('../src/components/email-form'), {
  ssr: false,
});

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our Website</h1>
            <EmailForm />
        </div>
    );
};

export default HomePage;
