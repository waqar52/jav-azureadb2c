export const msalConfig = {
    auth: {
        clientId: "<your-azure-b2c-client-id>",
        authority: "https://<your-tenant-name>.b2clogin.com/<your-tenant-name>.onmicrosoft.com/B2C_1_signin",
        knownAuthorities: ["<your-tenant-name>.b2clogin.com"],
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["openid", "profile"]
};
