"use client";

import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from '../types/user';
import { userService } from '../services/userService';
import { ApiError, isAuthError } from '../utils/errorHandling';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const { user: auth0User, isAuthenticated, isLoading, getAccessTokenSilently, logout } = useAuth0();
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!isAuthenticated || !auth0User) return;

      try {
        setIsLoadingProfile(true);
        setError(null);
        const token = await getAccessTokenSilently();
        
        // Check if user exists in our system
        const exists = await userService.checkUserExists(auth0User.email!, token);
        
        if (!exists) {
          // Create new user if they don't exist
          const newUser = {
            name: auth0User.name,
            email: auth0User.email,
            plan: 'free',
            credits: 100, // Default credits for new users
          };
          await userService.createUser(newUser, token);
        }
        
        // Fetch user profile
        const profile = await userService.getUserProfile(token);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        if (error instanceof ApiError) {
          if (isAuthError(error)) {
            logout({ 
              logoutParams: {
                returnTo: window.location.origin
              }
            });
          } else {
            setError(error.message);
          }
        } else {
          setError('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setIsLoadingProfile(false);
      }
    };

    fetchUserProfile();
  }, [isAuthenticated, auth0User, getAccessTokenSilently, logout]);

  if (isLoading || isLoadingProfile) {
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

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Unable to load profile information.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          {auth0User?.picture && (
            <img
              src={auth0User.picture}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          )}
          <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Current Plan</h2>
            <p className="text-gray-700 capitalize">{userProfile.plan}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Available Credits</h2>
            <p className="text-gray-700">{userProfile.credits}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => logout({ 
              logoutParams: {
                returnTo: window.location.origin
              }
            })}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}