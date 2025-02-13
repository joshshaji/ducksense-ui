import axios, { AxiosError } from 'axios';
import { User } from '../types/user';
import { handleApiError } from '../utils/errorHandling';

const API_BASE_URL = 'https://ducksense.ai/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add retry logic for failed requests
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Handle token refresh or logout here if needed
            window.location.href = '/api/auth/logout';
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export const userService = {
    async createUser(user: Partial<User>, token: string) {
        try {
            const response = await axiosInstance.post('/users', user, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return handleApiError(error);
        }
    },

    async getUserProfile(token: string) {
        try {
            const response = await axiosInstance.get('/users/profile', {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return handleApiError(error);
        }
    },

    async updateUserProfile(userData: Partial<User>, token: string) {
        try {
            const response = await axiosInstance.put('/users/profile', userData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            return handleApiError(error);
        }
    },

    async checkUserExists(email: string, token: string) {
        try {
            const response = await axiosInstance.get(`/users/check-exists?email=${encodeURIComponent(email)}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data.exists;
        } catch (error) {
            return handleApiError(error);
        }
    }
};