export class ApiError extends Error {
    public statusCode: number;
    public data?: any;

    constructor(message: string, statusCode: number, data?: any) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.data = data;
    }
}

export const handleApiError = (error: any): never => {
    if (error instanceof ApiError) {
        throw error;
    }

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new ApiError(
            error.response.data?.message || 'An error occurred with the API',
            error.response.status,
            error.response.data
        );
    } else if (error.request) {
        // The request was made but no response was received
        throw new ApiError('No response received from server', 503);
    } else {
        // Something happened in setting up the request
        throw new ApiError(error.message || 'An unexpected error occurred', 500);
    }
};

export const isAuthError = (error: any): boolean => {
    return (
        error instanceof ApiError && 
        (error.statusCode === 401 || error.statusCode === 403)
    );
};