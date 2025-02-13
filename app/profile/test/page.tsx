"use client";

import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';

export default function ProfileTest() {
  const router = useRouter();
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    getAccessTokenSilently,
    logout 
  } = useAuth0();
  
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (e) {
        console.error('Error getting token:', e);
        setError(e instanceof Error ? e.message : 'Failed to get access token');
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/');
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600">Error</h2>
            <p className="mt-2 text-gray-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>

        {/* Token Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Access Token</h2>
          <div className="relative">
            <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
              {token}
            </pre>
            <button
              onClick={() => {
                navigator.clipboard.writeText(token || '');
                alert('Token copied to clipboard!');
              }}
              className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Debug Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Debug Actions</h2>
          <div className="space-y-4">
            <button
              onClick={() => logout({ 
                logoutParams: {
                  returnTo: window.location.origin
                }
              })}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}