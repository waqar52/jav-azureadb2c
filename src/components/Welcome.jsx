import React from 'react';
import { SignInButton } from './SignInButton';
import { SignUpButton } from './SignUpButton';

export const Welcome = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Javed's Register</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                <SignInButton />
                <SignUpButton />
            </div>
        </div>
    );
};
