import React from 'react';
import { useMsal } from '@azure/msal-react';

export const SignUpButton = () => {
    const { instance } = useMsal();

    const handleSignUp = () => {
        instance.loginPopup({
            authority: "<your-signup-policy-authority>"
        }).catch(e => {
            console.error(e);
        });
    };

    return (
        <button onClick={handleSignUp} style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#107c10',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }}>
            Sign Up
        </button>
    );
};
