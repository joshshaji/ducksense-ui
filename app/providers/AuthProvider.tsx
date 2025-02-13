"use client";

import { Auth0Provider } from '@auth0/auth0-react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || 'dev-7qrplvltdpo7czdk.us.auth0.com';
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || 'NUqHJFfW79yil2m25BxRppYqgCORilaP';
  const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE || 'https://ducksense.ai/api';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
        audience: audience,
        scope: "openid profile email"
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};